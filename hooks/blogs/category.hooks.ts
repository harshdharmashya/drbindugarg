import { useMutation, useQuery } from '@tanstack/react-query';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '@/server/actions/category.actions';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { ICategory } from '@/server/models/category.model';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all categories and refresh queries on change

export function useCategories(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [BLOGS_QUERY_KEYS.CATEGORIES, queryParams],
    queryFn: () => getAllCategories(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create an category and refresh queries
export function useCreateCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.CATEGORIES] });
    },
  });
}

// 3. Update an category and refresh queries
export function useUpdateCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ICategory }) => updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.CATEGORIES] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.CATEGORIES] });
    },
  });
}
