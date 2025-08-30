import { useMutation, useQuery } from '@tanstack/react-query';
import { createGalleryItem, deleteGalleryItem, getAllGalleryItems, updateGalleryItem } from '@/server/actions/gallery.actions';
import { OTHER_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all gallery items and refresh queries on change
export function useGalleryItems(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [OTHER_QUERY_KEYS.GALLERIES, queryParams],
    queryFn: () => getAllGalleryItems(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create a gallery item and refresh queries
export function useCreateGalleryItem() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERIES] });
    },
  });
}

// 3. Update a gallery item and refresh queries
export function useUpdateGalleryItem() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) => updateGalleryItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERIES] });
    },
  });
}

// 4. Delete a gallery item and refresh queries
export function useDeleteGalleryItem() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteGalleryItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERIES] });
    },
  });
}
