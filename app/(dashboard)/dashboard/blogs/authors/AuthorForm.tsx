'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { AuthorDocument } from '@/server/models/author.model';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { useCreateAuthor, useUpdateAuthor } from '@/hooks/blogs/author.hooks';
import { SubmitButton } from '@/components/dashboard/admin/forms';

export const authorFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter the author name (at least 3 characters).' }),
  image: z.any(),
  designation: z.string().min(2, { message: 'Please enter the author designation (at least 2 characters).' }),
  alt: z.string().min(3, { message: 'Please enter alt text for the image (at least 3 characters).' }),
  link: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
});

const AuthorForm: React.FC<IAddUpdateFormProps<AuthorDocument>> = ({ data }) => {
  const updateAuthorMutation = useUpdateAuthor();
  const createAuthorMutation = useCreateAuthor();

  const authorId = data?._id;

  const form = useForm<z.infer<typeof authorFormSchema>>({
    resolver: zodResolver(authorFormSchema),
    defaultValues: {
      name: data?.name || '',
      image: data?.imgUrl || undefined,
      designation: data?.designation || '',
      alt: data?.alt || '',
      link: data?.link || '',
    },
  });

  async function onSubmit(values: z.infer<typeof authorFormSchema>) {
    const { name, image, designation, alt, link } = values;

    try {
      let result;

      const formData = new FormData();
      formData.append('name', name);
      formData.append('designation', designation);
      formData.append('alt', alt);
      formData.append('link', link as string);
      if (image instanceof File) {
        formData.append('image', image);
      }

      if (authorId) {
        result = await updateAuthorMutation.mutateAsync({ id: authorId, data: formData });
      } else {
        result = await createAuthorMutation.mutateAsync(formData);
      }

      if (result.success) {
        toast.success(result.message);
        !authorId && form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-6 mb-4 max-w-xl'>
          {/* Name field */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Name</span>
                  <span className='text-blue-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' type='text' placeholder='Enter author name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Designation field */}
          <FormField
            control={form.control}
            name='designation'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Designation</span>
                  <span className='text-blue-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' type='text' placeholder='Enter author designation' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Alt text field */}
          <FormField
            control={form.control}
            name='alt'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Image Alt Text</span>
                  <span className='text-blue-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' type='text' placeholder='Enter image alt text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Link field */}
          <FormField
            control={form.control}
            name='link'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Author Link</span>
                  <span className='text-blue-500'>*</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' type='text' placeholder='Enter author link' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <SubmitButton
          isSubmitting={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
          label={authorId ? 'Update Author' : 'Create Author'}
          submittingLabel={authorId ? 'Updating...' : 'Creating...'}
        />
      </form>
    </Form>
  );
};

export default AuthorForm;
