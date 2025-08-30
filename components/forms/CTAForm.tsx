'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import SubmitButton from './SubmitButton';
import { toast } from 'react-toastify';
import { createAPIEnquiry } from '@/server/actions/enquiry.actions';
import { handleNumericInput } from '@/lib/utils';
import { phoneSchema } from '@/lib/validations/zod';

const appointmentFormSchema = z.object({
  fullName: z.string().min(3, { message: 'Please enter your full name (at least 3 characters).' }),
  phone: phoneSchema,
  treatment: z.string().min(1, { message: 'Please enter a treatment' }),
  message: z.string().min(1, { message: 'Please enter your message.' }),
  email: z.string().optional(),
});

const CTAForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof appointmentFormSchema>>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      treatment: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof appointmentFormSchema>) {
    const { fullName, email, phone, message, treatment } = values;

    const pageUrl = document.location.href;
    const pageTitle = document.title;
    const payload = { fullName, email, phone, message: `Message: ${message} - Treatment: ${treatment}`, pageUrl, pageTitle };

    try {
      const sheetData = {
        Name: fullName,
        Email: email,
        Phone: phone,
        Subject: '',
        Message: message,
        Treatment: treatment,
        PageUrl: pageUrl,
        PageTitle: pageTitle,
      };
      console.log('sheetData', sheetData);
      const result = await createAPIEnquiry(payload);
      // Push data to Google Sheets Web App
      await fetch("https://script.google.com/macros/s/AKfycbxvxqE79g1R7zw7gDb2x9ofXdExJeN12s_sOyx0j1bA2g7Oupm7oUjbxXCPW_3kNLpF/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(fullName)}&Email=${encodeURIComponent(email || '')}&Phone=${encodeURIComponent(phone)}&Subject=''&Message=${encodeURIComponent(message)}&Treatment=${encodeURIComponent(treatment)}&PageUrl=${encodeURIComponent(pageUrl)}&PageTitle=${encodeURIComponent(pageTitle)}`,
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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Name field */}
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='primary-label'>
                    <span>Your Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input className='primary-input-md' type='text' placeholder='Enter your name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone field */}
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='primary-label'>
                    <span>Your Phone</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='primary-input-md'
                      placeholder='Enter your phone number'
                      {...field}
                      onChange={(e) =>
                        handleNumericInput(e, field, {
                          asString: true,
                        })
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email field */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='primary-label'>
                    <span>Your Email (Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input className='primary-input-md' type='email' placeholder='Enter your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Treatment field */}
            <FormField
              control={form.control}
              name='treatment'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='primary-label'>
                    <span>Treatment Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input className='primary-input-md' placeholder='Enter Treatment Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message field */}
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem className='w-full lg:col-span-2'>
                  <FormLabel className='primary-label'>
                    <span>Your Message</span>
                  </FormLabel>
                  <FormControl>
                    <Input className='primary-input-md' type='text' placeholder='Enter your message' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <SubmitButton isSubmitting={form.formState.isSubmitting} label='Schedule Consulation' submittingLabel='Booking...' className='mt-5' />
        </form>
      </Form>
    </div>
  );
};

export default CTAForm;
