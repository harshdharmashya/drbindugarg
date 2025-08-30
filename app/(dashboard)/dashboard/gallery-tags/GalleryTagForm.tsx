'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { GalleryTagDocument } from '@/server/models/gallery-tag.model';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { useCreateGalleryTag, useUpdateGalleryTag } from '@/hooks/gallery-tags.hooks';
import { SubmitButton } from '@/components/dashboard/admin/forms';

export const galleryTagFormSchema = z.object({ name: z.string().min(3, { message: 'Please enter the gallery tag name (at least 3 characters).' }) });

const GalleryTagForm: React.FC<IAddUpdateFormProps<GalleryTagDocument>> = ({ data }) => {
  const updateGalleryTagMutation = useUpdateGalleryTag();
  const createGalleryTagMutation = useCreateGalleryTag();

  const tagId = data?._id;

  const form = useForm<z.infer<typeof galleryTagFormSchema>>({
    resolver: zodResolver(galleryTagFormSchema),
    defaultValues: {
      name: data?.name || '',
    },
  });

  async function onSubmit(values: z.infer<typeof galleryTagFormSchema>) {
    const { name } = values;

    try {
      let result;

      if (tagId) {
        result = await updateGalleryTagMutation.mutateAsync({ id: tagId, data: { name } });
      } else {
        result = await createGalleryTagMutation.mutateAsync({ name });
      }

      if (result.success) {
        toast.success(result.message);
        !tagId && form.reset();
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
                  <Input className='primary-input-md' type='text' placeholder='Enter gallery tag name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit button */}
        <SubmitButton
          isSubmitting={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
          label={tagId ? 'Update Gallery Tag' : 'Create Gallery Tag'}
          submittingLabel={tagId ? 'Updating...' : 'Creating...'}
        />
      </form>
    </Form>
  );
};

export default GalleryTagForm;
