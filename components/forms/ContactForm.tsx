'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SubmitButton from './SubmitButton';
import { createContactEnquiry } from '@/server/actions/enquiry.actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export const contactFormSchema = z.object({
  message: z.string().min(1, 'Message is required'),
  fullName: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  pageUrl: z.string().optional(),
  pageTitle: z.string().optional(),
});

export default function ContactForm({ className }: { className?: string }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      message: '',
      fullName: '',
      email: '',
      phone: '',
      subject: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const pageUrl = document.location.href;
    const pageTitle = document.title;
    try {
      const sheetData = {
        Name: values.fullName,
        Email: values.email,
        Phone: values.phone,
        Subject: values.subject,
        Message: values.message,
        Treatment: '',
        PageUrl: pageUrl,
        PageTitle: pageTitle,
      };
      console.log('sheetData', sheetData);

      const result = await createContactEnquiry({ ...values, pageTitle, pageUrl});

      // Push data to Google Sheets Web App
      await fetch("https://script.google.com/macros/s/AKfycbxvxqE79g1R7zw7gDb2x9ofXdExJeN12s_sOyx0j1bA2g7Oupm7oUjbxXCPW_3kNLpF/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(values.fullName)}&Email=${encodeURIComponent(values.email)}&Phone=${encodeURIComponent(values.phone)}&Subject=${encodeURIComponent(values.subject)}&Message=${encodeURIComponent(values.message)}&Treatment=''&PageUrl=${encodeURIComponent(pageUrl)}&PageTitle=${encodeURIComponent(pageTitle)}`,
      })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => console.log(err));

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
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-6 bg-white p-8 rounded-2xl border border-gray-200', className)}>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-700 font-medium'>Name*</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Please enter name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-700 font-medium'>Email*</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  type='email'
                  placeholder='Please enter your email address'
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
              <FormLabel className='text-gray-700 font-medium'>Phone*</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Please enter your phone number'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-gray-700 font-medium'>Subject*</FormLabel>
              <FormControl>
                <Input
                  className='bg-gray-100 border-none rounded-full p-6 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Please enter your subject'
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
              <FormLabel className='text-gray-700 font-medium'>Your Message*</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className='bg-gray-100 border-none rounded-3xl px-6 py-4 focus-visible:!ring-primaryColor !ring-offset-primaryColor-50'
                  placeholder='Please write your message here'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <SubmitButton isSubmitting={form.formState.isSubmitting} label='Send a message' submittingLabel='Sending...' className='mt-5 !rounded-full' />
      </form>
    </Form>
  );
}
