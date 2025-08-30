'use client';

import { FormField, FormItem, FormControl, Form, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { IAddUpdateFormProps } from '@/types/dashboard';
import { useCreateSubCategory, useUpdateSubCategory } from '@/hooks/blogs/subcategory.hooks';
import { Input } from '@/components/ui/input';
import { CategoryDocument } from '@/server/models/category.model';
import { SubmitButton } from '@/components/dashboard/admin/forms';

export const subcategoryFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter the subcategory name (at least 3 characters).' }),
  slug: z.string().optional(),
  categoryId: z.string(),
});

const SubCategoryForm: React.FC<IAddUpdateFormProps<CategoryDocument> & { categoryId: string }> = ({ data, categoryId }) => {
  const updateSubcategoryMutation = useUpdateSubCategory();
  const createSubcategoryMutation = useCreateSubCategory();

  if (!categoryId) toast.error('No category specified');

  const subcategoryId = data?._id;

  const form = useForm<z.infer<typeof subcategoryFormSchema>>({
    resolver: zodResolver(subcategoryFormSchema),
    defaultValues: {
      name: data?.name || '',
      slug: data?.slug || '',
      categoryId,
    },
  });

  async function onSubmit(values: z.infer<typeof subcategoryFormSchema>) {
    const { name, slug, categoryId } = values;

    try {
      let result;

      if (subcategoryId) {
        result = await updateSubcategoryMutation.mutateAsync({ id: subcategoryId, data: { name, slug, category: categoryId } });
      } else {
        result = await createSubcategoryMutation.mutateAsync({ name, slug, category: categoryId });
      }

      if (result.success) {
        toast.success(result.message);
        !subcategoryId && form.reset();
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
                  <Input className='primary-input-md' type='text' placeholder='Enter subcategory name' {...field} />
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
          label={subcategoryId ? 'Update Subcategory' : 'Create Subcategory'}
          submittingLabel={subcategoryId ? 'Updating...' : 'Creating...'}
        />
      </form>
    </Form>
  );
};

export default SubCategoryForm;
