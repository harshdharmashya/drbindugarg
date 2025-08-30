import { IAPIResponse } from '@/types/dashboard';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

// Fetch generic data
export function useEntityQuery<T>(queryKey: string[], fetchFn: () => Promise<IAPIResponse>, dataKey: string) {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const result = await fetchFn();
      if (result.success && result.data && result.data[dataKey]) {
        return result.data[dataKey];
      }
      throw new Error(result.message || 'Failed to fetch data');
    },
  });
}

export function useQueryData<T, S = T>(
  queryKey: string[],
  queryFn: () => Promise<T>,
  options?: UseQueryOptions<T, unknown, S> & { select?: (data: T) => S }
) {
  const defaultSelect = (data: T): S => (data as any).data;

  return useQuery<T, unknown, S>({ queryKey, queryFn, select: options?.select || defaultSelect, ...options });
}
