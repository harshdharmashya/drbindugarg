import { useMutation, useQuery } from '@tanstack/react-query';
import { createAuthor, deleteAuthor, getAllAuthors, updateAuthor } from '@/server/actions/author.actions';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all authors
export function useAuthors(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [BLOGS_QUERY_KEYS.AUTHORS, queryParams],
    queryFn: () => getAllAuthors(queryParams),
    select: (response) => response.data,
  });
}

// 2. Create an author and refresh queries
export function useCreateAuthor() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.AUTHORS] });
    },
  });
}

// 3. Update an author and refresh queries
export function useUpdateAuthor() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: FormData }) => updateAuthor(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.AUTHORS] });
    },
  });
}

export function useDeleteAuthor() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteAuthor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.AUTHORS] });
    },
  });
}
