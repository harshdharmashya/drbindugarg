import { useMutation, useQuery } from '@tanstack/react-query';
import { createTag, deleteTag, getAllTags, updateTag } from '@/server/actions/tag.actions';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { ITag } from '@/server/models/tag.model';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all tags and refresh queries on change
export function useTags(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [BLOGS_QUERY_KEYS.TAGS, queryParams],
    queryFn: () => getAllTags(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create an tag and refresh queries
export function useCreateTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.TAGS] });
    },
  });
}

// 3. Update an tag and refresh queries
export function useUpdateTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ITag }) => updateTag(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.TAGS] });
    },
  });
}

export function useDeleteTag() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.TAGS] });
    },
  });
}
