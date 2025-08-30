'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { Switch } from '@/components/ui/switch';
import { useUpdateGalleryCategory, useCreateGalleryCategory } from '@/hooks/gallery-category.hooks';
import { GalleryCategoryDocument } from '@/server/models/gallery-category.model';

const galleryFormSchema = z.object({
  name: z.string().min(1, { message: 'Please enter the gallery category name (at least 1 character).' }),
  description: z.string().optional(),
  isActive: z.boolean(),
});

const GalleryCategoryForm: React.FC<IAddUpdateFormProps<GalleryCategoryDocument>> = ({ data }) => {
  const updateGalleryCategoryMutation = useUpdateGalleryCategory();
  const createGalleryCategoryMutation = useCreateGalleryCategory();

  //  @ts-ignore
  const galleryCategoryId = data?._id;

  const form = useForm<z.infer<typeof galleryFormSchema>>({
    resolver: zodResolver(galleryFormSchema),
    defaultValues: {
      name: data?.name || '',
      description: data?.description || '',
      isActive: data?.isActive || true,
    },
  });

  async function onSubmit(values: z.infer<typeof galleryFormSchema>) {
    try {
      let result;

      if (galleryCategoryId) {
        result = await updateGalleryCategoryMutation.mutateAsync({ id: galleryCategoryId, data: values });
      } else {
        result = await createGalleryCategoryMutation.mutateAsync(values);
      }

      if (result.success) {
        toast.success(result.message);

        if (!galleryCategoryId) {
          form.reset();
        }
      } else {
        throw new Error(result.message || 'An error occurred');
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className='primary-input-md' placeholder='Enter gallery category name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className='primary-input-md' rows={5} placeholder='Enter gallery category description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='isActive'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>Active Status</FormLabel>
                <FormDescription>{field.value ? 'This gallery category is active.' : 'This gallery category is inactive.'}</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <button type='submit' disabled={form.formState.isSubmitting} className='btn-default__outline !rounded-lg !py-3 justify-center'>
          {form.formState.isSubmitting ? (
            <>
              <Loader2 size={20} className='animate-spin mr-3' />
              <span>{galleryCategoryId ? 'Updating...' : 'Creating...'}</span>
            </>
          ) : (
            <span>{galleryCategoryId ? 'Update Gallery Category' : 'Create Gallery Category'}</span>
          )}
        </button>
      </form>
    </Form>
  );
};

export default GalleryCategoryForm;
