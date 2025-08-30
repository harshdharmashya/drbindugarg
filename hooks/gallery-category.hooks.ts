import { useMutation, useQuery } from '@tanstack/react-query';
import { createGalleryCategory, deleteGalleryCategory, getAllGalleryCategories, updateGalleryCategory } from '@/server/actions/gallery-category.actions';
import { OTHER_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';
import { IGalleryCategory } from '@/server/models/gallery-category.model';

// 1. Fetch all gallery categories and refresh queries on change
export function useGalleryCategories(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [OTHER_QUERY_KEYS.GALLERY_CATEGORIES, queryParams],
    queryFn: () => getAllGalleryCategories(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create a gallery category and refresh queries
export function useCreateGalleryCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: IGalleryCategory) => createGalleryCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_CATEGORIES] });
    },
  });
}

// 3. Update a gallery category and refresh queries
export function useUpdateGalleryCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<IGalleryCategory> }) => updateGalleryCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_CATEGORIES] });
    },
  });
}

// 4. Delete a gallery category and refresh queries
export function useDeleteGalleryCategory() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteGalleryCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_CATEGORIES] });
    },
  });
}
