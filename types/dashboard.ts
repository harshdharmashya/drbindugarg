import { filterTypeMaps } from '@/constants/admin';
import { DateRange } from 'react-day-picker';

export interface IAddUpdateFormProps<T> {
  data?: T;
}

export interface IPagination {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ITable {
  headers: string[];
  rows: Array<{
    id: number;
    values: React.ReactNode[];
  }>;
  pagination?: IPagination;
  isLoading?: boolean;
}

export interface IAPIResponse<T = any> {
  success: boolean;
  message: string;
  statusCode: number;
  data?: T;
}

export interface FilterOption {
  type: keyof typeof filterTypeMaps;
  label: string;
  key: string;
  options?: { value: string; label: string }[];
}

export interface FilterValues {
  [key: string]: string | DateRange | string[] | undefined;
}

export interface MasterFilterProps {
  filterOptions: FilterOption[];
  onApplyFilters: (filters: FilterValues) => void;
  onResetFilters: () => void;
  initialFilters?: FilterValues;
}

export interface APIQueryParams {
  page?: number;
  limit?: number;
  [key: string]: any;
}

export interface ISendMailParams {
  from?: string;
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string | any;
    encoding?: string;
  }>;
}
