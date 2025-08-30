'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { TagDocument } from '@/server/models/tag.model';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { useCreateTag, useUpdateTag } from '@/hooks/blogs/tag.hooks';
import { SubmitButton } from '@/components/dashboard/admin/forms';

export const tagFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter the tag name (at least 3 characters).' }),
  slug: z.string().optional(),
});

const TagForm: React.FC<IAddUpdateFormProps<TagDocument>> = ({ data }) => {
  const updateTagMutation = useUpdateTag();
  const createTagMutation = useCreateTag();

  const tagId = data?._id;

  const form = useForm<z.infer<typeof tagFormSchema>>({
    resolver: zodResolver(tagFormSchema),
    defaultValues: {
      name: data?.name || '',
      slug: data?.slug || '',
    },
  });

  async function onSubmit(values: z.infer<typeof tagFormSchema>) {
    const { name, slug } = values;

    try {
      let result;

      if (tagId) {
        result = await updateTagMutation.mutateAsync({ id: tagId, data: { name, slug } });
      } else {
        result = await createTagMutation.mutateAsync({ name, slug });
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
                  <Input className='primary-input-md' type='text' placeholder='Enter tag name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Slug field */}
          <FormField
            control={form.control}
            name='slug'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel className='primary-label'>
                  <span>Slug</span>
                </FormLabel>
                <FormControl>
                  <Input className='primary-input-md' type='text' placeholder='Enter slug' {...field} />
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
          label={tagId ? 'Update Tag' : 'Create Tag'}
          submittingLabel={tagId ? 'Updating...' : 'Creating...'}
        />
      </form>
    </Form>
  );
};

export default TagForm;
