'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/forms/SubmitButton';
import { createContactEnquiry } from '@/server/actions/enquiry.actions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

const blogFormSchema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(1, 'Message is required'),
  pageUrl: z.string().optional(),
  pageTitle: z.string().optional(),
});

export default function BlogMiniForm({ className = '' }: { className?: string }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof blogFormSchema>>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof blogFormSchema>) {
    const pageUrl = document.location.href;
    const pageTitle = document.title;
    const result = await createContactEnquiry({ ...values, pageTitle, pageUrl });
    try {
      if (result.success) {
        toast.success(result.message);
        form.reset();
        router.push('/thankyou');
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('gap-6 grid grid-cols-1 bg-white p-6 rounded-2xl border border-gray-200', className)}
      >
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full text-gray-900 p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Full Name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full text-gray-900 p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Phone Number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={3}
                  className='bg-gray-100 border-none rounded-3xl text-gray-900 px-6 py-4 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Please write your message here'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <SubmitButton
          isSubmitting={form.formState.isSubmitting}
          label='Get In Touch With Us'
          submittingLabel='Sending...'
          className='!rounded-full'
        />
      </form>
    </Form>
  );
}
