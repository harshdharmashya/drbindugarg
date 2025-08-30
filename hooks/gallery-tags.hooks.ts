import { useMutation, useQuery } from '@tanstack/react-query';
import { createGalleryTag, deleteGalleryTag, getAllGalleryTags, updateGalleryTag } from '@/server/actions/gallery-tag.actions';
import { OTHER_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { IGalleryTag } from '@/server/models/gallery-tag.model';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all gallery tags and refresh queries on change
export function useGalleryTags(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [OTHER_QUERY_KEYS.GALLERY_TAGS, queryParams],
    queryFn: () => getAllGalleryTags(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create a gallery tag and refresh queries
export function useCreateGalleryTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createGalleryTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_TAGS] });
    },
  });
}

// 3. Update a gallery tag and refresh queries
export function useUpdateGalleryTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: IGalleryTag }) => updateGalleryTag(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_TAGS] });
    },
  });
}

export function useDeleteGalleryTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteGalleryTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [OTHER_QUERY_KEYS.GALLERY_TAGS] });
    },
  });
}
