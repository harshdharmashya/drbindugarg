'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import { SubmitButton } from '.';
import { changePassword } from '@/server/actions/auth.actions';
import { CreateSessionPayload } from '@/server/auth/definitions';

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

interface ChangePasswordFormProps {
  onClose: () => void;
  user: CreateSessionPayload | null;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ user, onClose }) => {
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    try {
      const result = await changePassword({
        userId: user?.userId || '',
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      });

      if (result.success) {
        toast.success('Password changed successfully');
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred while changing the password');
    }
  }

  const togglePasswordVisibility = (field: 'old' | 'new' | 'confirm') => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='p-4 pt-2 space-y-6'>
        <div className='text-center mb-6 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg'>
          <h2 className='text-base font-semibold text-blue-500'>Change Password</h2>
        </div>

        <FormField
          control={form.control}
          name='oldPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Current Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input type={showPasswords.old ? 'text' : 'password'} className='primary-input-md' placeholder='Current Password' {...field} />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center z-10'
                    onClick={() => togglePasswordVisibility('old')}
                  >
                    {showPasswords.old ? <EyeOff className='h-5 w-5 text-gray-400' /> : <Eye className='h-5 w-5 text-gray-400' />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='newPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>New Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input type={showPasswords.new ? 'text' : 'password'} className='primary-input-md' placeholder='New Password' {...field} />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center z-10'
                    onClick={() => togglePasswordVisibility('new')}
                  >
                    {showPasswords.new ? <EyeOff className='h-5 w-5 text-gray-400' /> : <Eye className='h-5 w-5 text-gray-400' />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Confirm New Password</FormLabel>
              <FormControl>
                <div className='relative'>
                  <Input
                    type={showPasswords.confirm ? 'text' : 'password'}
                    className='primary-input-md'
                    placeholder='Confirm New Password'
                    {...field}
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-3 flex items-center z-10'
                    onClick={() => togglePasswordVisibility('confirm')}
                  >
                    {showPasswords.confirm ? <EyeOff className='h-5 w-5 text-gray-400' /> : <Eye className='h-5 w-5 text-gray-400' />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-end space-x-3'>
          <button
            type='button'
            onClick={onClose}
            className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-300'
          >
            Cancel
          </button>

          <SubmitButton
            disabled={form.formState.isSubmitting}
            isSubmitting={form.formState.isSubmitting}
            submittingLabel='Changing...'
            label='Change Password'
            className='!text-sm'
          />
        </div>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
