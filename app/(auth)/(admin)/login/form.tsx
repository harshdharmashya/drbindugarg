'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { login } from '@/server/actions/auth.actions';
import Link from 'next/link';
import { AdminRoles } from '@/server/models/user.model';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  otp: z.string().optional(),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [canResendOTP, setCanResendOTP] = useState(true);
  const [isResending, setIsResending] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      otp: '',
    },
  });

  async function onSubmit({ email, password, otp }: z.infer<typeof loginSchema>) {
    try {
      const result = await login({ email, password, otp });

      if (!result.success) throw new Error(result.message);

      if (result.otpSent) {
        setShowOTP(true);
        setRemainingTime(120); // 2 minutes in seconds
        setCanResendOTP(false);
        toast.success(result.message);
        return;
      }

      const { user } = result?.data || {};

      const userRole = user?.role as AdminRoles;

      if (userRole) {
        const welcomeMessage = `Welcome back, ${user.name}! You are logged in as a ${userRole} member.`;
        toast.success(welcomeMessage);
        router.push('/dashboard');
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred while verifying the credentials. Please try again.');
    }
  }

  const handleResendOTP = async () => {
    if (!canResendOTP || remainingTime > 0 || isResending) return;

    setIsResending(true);
    const email = form.getValues('email');
    const password = form.getValues('password');

    try {
      const result = await login({ email, password });

      if (!result.success) {
        throw new Error(result.message);
      }

      if (result.otpSent) {
        setCanResendOTP(false);
        setRemainingTime(120);
        toast.success(result.message);
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to resend OTP');
      setCanResendOTP(true);
      setRemainingTime(0);
    } finally {
      setIsResending(false);
    }
  };

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            setCanResendOTP(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div className='flex items-center justify-center bg-gradient-to-br from-primaryColor-500 to-primaryColor-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 relative'>
        <div className='bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105'>
          <div className='text-center'>
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>Welcome back</h2>
            <p className='mt-2 text-sm text-gray-600'>Please sign in to your account</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='sr-only'>Email address</FormLabel>
                    <FormControl>
                      <Input
                        id='email'
                        type='email'
                        autoComplete='email'
                        className='appearance-none rounded-md relative block w-full !py-6 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryColor-500 focus:border-primaryColor-500 focus:z-10 sm:text-sm'
                        placeholder='Email address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='sr-only'>Password</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          id='password'
                          type={showPassword ? 'text' : 'password'}
                          autoComplete='current-password'
                          className='appearance-none rounded-md relative block w-full !py-6 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primaryColor-500 focus:border-primaryColor-500 focus:z-10 sm:text-sm'
                          placeholder='Password'
                          {...field}
                        />
                        <button
                          type='button'
                          className='absolute inset-y-0 right-0 pr-3 flex items-center z-10'
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className='h-5 w-5 text-gray-400' /> : <Eye className='h-5 w-5 text-gray-400' />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {showOTP && (
                <div className='space-y-4'>
                  <FormField
                    control={form.control}
                    name='otp'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>One-Time Password</FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              {Array.from({ length: 6 }).map((_, index) => (
                                <InputOTPSlot key={index} className='size-10 sm:size-12' index={index} aria-label={`OTP digit ${index + 1}`} />
                              ))}
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='flex items-center justify-between text-sm'>
                    <p className='text-gray-600'>
                      Resend available in: {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
                    </p>
                    <button
                      type='button'
                      onClick={handleResendOTP}
                      disabled={!canResendOTP || remainingTime > 0 || isResending}
                      className={`text-primaryColor-600 hover:text-primaryColor-500 ${
                        !canResendOTP || remainingTime > 0 || isResending ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isResending ? (
                        <span className='flex items-center gap-2'>
                          <Loader2 className='h-4 w-4 animate-spin' />
                          Resending...
                        </span>
                      ) : (
                        'Resend OTP'
                      )}
                    </button>
                  </div>
                </div>
              )}
              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryColor-600 hover:bg-primaryColor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor-500'
                  disabled={form.formState.isSubmitting}
                >
                  <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                    {form.formState.isSubmitting ? (
                      <Loader2 className='h-5 w-5 text-primaryColor-200 group-hover:text-primaryColor-400 animate-spin' />
                    ) : (
                      <LogIn className='h-5 w-5 text-primaryColor-200 group-hover:text-primaryColor-400' />
                    )}
                  </span>
                  {form.formState.isSubmitting ? 'Verifying...' : 'Sign in'}
                </button>
              </div>
            </form>
          </Form>
          <p className='mt-6 text-center text-sm text-gray-600'>
            Trouble in login?{' '}
            <Link href='/contact' className='font-medium text-primaryColor-600 hover:text-primaryColor-500'>
              Fix it now
            </Link>
          </p>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-primaryColor-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        <div className='absolute top-0 right-0 w-32 h-32 bg-secondaryColor-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-20 w-32 h-32 bg-secondaryColor-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
      </div>
    </div>
  );
};

export default LoginForm;
