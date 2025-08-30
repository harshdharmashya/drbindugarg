'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { CategoryDocument } from '@/server/models/category.model';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { useCreateCategory, useUpdateCategory } from '@/hooks/blogs/category.hooks';
import { SubmitButton } from '@/components/dashboard/admin/forms';

export const categoryFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter the category name (at least 3 characters).' }),
  slug: z.string().optional(),
});

const CategoryForm: React.FC<IAddUpdateFormProps<CategoryDocument>> = ({ data }) => {
  const updateCategoryMutation = useUpdateCategory();
  const createCategoryMutation = useCreateCategory();

  const categoryId = data?._id;

  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: data?.name || '',
      slug: data?.slug || '',
    },
  });

  async function onSubmit(values: z.infer<typeof categoryFormSchema>) {
    const { name, slug } = values;

    try {
      let result;

      if (categoryId) {
        result = await updateCategoryMutation.mutateAsync({ id: categoryId, data: { name, slug } });
      } else {
        result = await createCategoryMutation.mutateAsync({ name, slug });
      }

      if (result.success) {
        toast.success(result.message);
        !categoryId && form.reset();
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
                  <Input className='primary-input-md' type='text' placeholder='Enter category name' {...field} />
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

        <SubmitButton
          isSubmitting={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
          label={categoryId ? 'Update Category' : 'Create Category'}
          submittingLabel={categoryId ? 'Updating...' : 'Creating...'}
        />
      </form>
    </Form>
  );
};

export default CategoryForm;
