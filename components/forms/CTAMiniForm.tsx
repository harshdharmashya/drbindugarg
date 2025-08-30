'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleNumericInput } from '@/lib/utils';
import { createAPIEnquiry } from '@/server/actions/enquiry.actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { phoneSchema } from '@/lib/validations/zod';
import SubmitButton from './SubmitButton';
import { MessageCircleQuestion, PhoneIcon, Stethoscope, UserIcon } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: phoneSchema,
  treatment: z.string().min(1, { message: 'Please enter treatment name here' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CTAMiniForm = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      treatment: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { fullName, phone, treatment, message } = values;

    const pageUrl = document.location.href;
    const pageTitle = document.title;
    const payload = { fullName, phone, message: `Treatment: ${treatment} Message: ${message}`, pageUrl, pageTitle };
    try {
      const sheetData = {
        Name: fullName,
        Email: '',
        Phone: phone,
        Subject: '',
        Message: message,
        Treatment: treatment,
        PageUrl: pageUrl,
        PageTitle: pageTitle,
      };
      console.log('sheetData', sheetData);

      const result = await createAPIEnquiry(payload);

      await fetch("https://script.google.com/macros/s/AKfycbxvxqE79g1R7zw7gDb2x9ofXdExJeN12s_sOyx0j1bA2g7Oupm7oUjbxXCPW_3kNLpF/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(fullName)}&Email=''&Phone=${encodeURIComponent(phone)}&Subject=''&Message=${encodeURIComponent(message || '')}&Treatment=${encodeURIComponent(treatment)}&PageUrl=${encodeURIComponent(pageUrl)}&PageTitle=${encodeURIComponent(pageTitle)}`,
      })
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(err => console.log(err));
      if (result.success) {
        toast.success(result.message);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='primary-label'>
                <UserIcon className='text-primaryColor-500' />
                <span>Your Name *</span>
              </FormLabel>
              <FormControl>
                <Input placeholder='Your Name' {...field} className='primary-input-md' />
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
              <FormLabel className='primary-label'>
                <PhoneIcon className='text-primaryColor-500' />
                <span>Phone Number *</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='Your Phone Number'
                  onChange={(e) =>
                    handleNumericInput(e, field, {
                      asString: true,
                    })
                  }
                  className='primary-input-md'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='treatment'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='primary-label'>
                <Stethoscope className='text-primaryColor-500' />
                <span>Treatment Name *</span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder='Treatment Name' className='primary-input-md' />
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
              <FormLabel className='primary-label'>
                <MessageCircleQuestion className='text-primaryColor-500' />
                <span>Your Message (Optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder='Your Message' {...field} className='primary-input-md' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button */}
        <SubmitButton isSubmitting={form.formState.isSubmitting} submittingLabel='Scheduling...' label='Schedule Consultation' />
      </form>
    </Form>
  );
};

export default CTAMiniForm;
