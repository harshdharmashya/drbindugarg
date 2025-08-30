import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteBlog, getAllBlogs } from '@/server/actions/blog.actions';
import { BLOGS_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { getQueryClient } from '@/lib/react-query/queryClient';
import { APIQueryParams } from '@/types/dashboard';

// 1. Fetch all blogs
export function useBlogs(queryParams: APIQueryParams = {}) {
  return useQuery({
    queryKey: [BLOGS_QUERY_KEYS.BLOGS, queryParams],
    queryFn: () => getAllBlogs(queryParams),
    select: (response) => response.data,
  });
}

export function useDeleteBlog() {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BLOGS_QUERY_KEYS.BLOGS] });
    },
  });
}
