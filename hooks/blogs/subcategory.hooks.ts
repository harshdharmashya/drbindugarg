import { useMutation } from '@tanstack/react-query';
import { createSubCategory, deleteSubCategory, getAllSubCategories, updateSubCategory } from '@/server/actions/subcategory.actions';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { SubCategoryDocument, ISubCategory } from '@/server/models/subcategory.model';
import { useEntityQuery } from '../generics.hooks';
import { getQueryClient } from '@/lib/react-query/queryClient';

// 1. Fetch all subcategories and refresh queries on change
export function useSubCategories(categoryId: string) {
  return useEntityQuery<SubCategoryDocument[]>(
    [BLOGS_QUERY_KEYS.SUBCATEGORIES, categoryId],
    () => getAllSubCategories({ categoryId }),
    'subcategories'
  );
}

// 2. Create a subcategory and refresh queries
export function useCreateSubCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createSubCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.SUBCATEGORIES] });
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.CATEGORIES] });
    },
  });
}

// 3. Update a subcategory and refresh queries
export function useUpdateSubCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ISubCategory }) => updateSubCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.SUBCATEGORIES] });
    },
  });
}

export function useDeleteSubCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteSubCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.SUBCATEGORIES] });
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.CATEGORIES] });
    },
  });
}
