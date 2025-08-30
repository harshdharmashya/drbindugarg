'use client';

import { AdminDashActionLinks } from '@/components/dashboard/admin/misc';
import { MasterTable } from '@/components/dashboard/admin/table';
import { ErrorState } from '@/components/dashboard/admin/misc/StateUI';
import { useDeleteSubCategory, useSubCategories } from '@/hooks/blogs/subcategory.hooks';

const SubCategoryTable = ({ categoryId }: { categoryId: string }) => {
  const { data: subcategories, isLoading, error } = useSubCategories(categoryId);
  const deleteItem = useDeleteSubCategory();

  if (error) {
    return <ErrorState message={error.message} />;
  }

  const headers = ['Name', 'Slug', 'Actions'];

  const rows =
    subcategories?.map((subcategory) => ({
      id: subcategory._id,
      values: [
        <p className='font-medium'>{subcategory.name}</p>,
        <p className='text-sm text-gray-500'>{subcategory.slug}</p>,
        <AdminDashActionLinks
          edit
          delete
          basePath={`/blogs/categories/${categoryId}/subcategories`}
          id={subcategory._id}
          itemName={subcategory.name}
          deleteItem={() => deleteItem.mutateAsync(subcategory._id)}
        />,
      ],
    })) || [];

  return <MasterTable headers={headers} rows={rows} isLoading={isLoading} />;
};

export default SubCategoryTable;
