import { useQuery } from '@tanstack/react-query';
import { getAllEnquiries } from '@/server/actions/enquiry.actions';
import { ENQUIRIES_QUERY_KEYS } from '@/lib/react-query/queryKeys';
import { APIQueryParams } from '@/types/dashboard';

// 1. ENQUIRIES
export function useEnquiries({ queryParams }: { queryParams: APIQueryParams }) {
  return useQuery({
    queryKey: [ENQUIRIES_QUERY_KEYS.ENQUIRIES, queryParams],
    queryFn: () => getAllEnquiries({ queryParams }),
    select: (response) => response.data,
  });
}
