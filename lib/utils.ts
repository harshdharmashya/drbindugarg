import xss from 'xss';
import sanitize from 'mongo-sanitize';

import { StatusCodes } from '@/constants/StatusCodes';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const preparePhoneNumberLinkWithTel = (number: string) => {
  if (!number) return '';
  return `tel:${number?.replace(/[^+\d]/g, '')}`;
};

export const formatNumberLink = (number: string) => {
  return `${number.replace(/[^+\d]/g, '')}`;
};

export function formatDateTime(dateString: string | Date, use24HourFormat = false) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: !use24HourFormat,
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string.');
  }

  const sanitizedInput = xss(input);
  const sanitizedMongoInput = sanitize(sanitizedInput);
  return sanitizedMongoInput;
}

export function toPlainObject<T>(doc: T): T {
  return JSON.parse(JSON.stringify(doc));
}

export function sanitizePayload<T>(payload: Partial<T>): Partial<T> {
  const recurseSanitize = (value: any): any => {
    if (Array.isArray(value)) {
      return value.map((item) => recurseSanitize(item));
    } else if (value !== null && typeof value === 'object') {
      return Object.entries(value).reduce((acc, [key, val]) => {
        acc[key] = recurseSanitize(val);
        return acc;
      }, {} as Record<string, any>);
    } else if (typeof value === 'string') {
      return sanitizeInput(value);
    }
    return value;
  };

  return Object.entries(payload).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      acc[key as keyof T] = recurseSanitize(value);
    }
    return acc;
  }, {} as Partial<T>);
}

export function traceErrors(error: any) {
  let errorMessage;

  if (error.name === 'ValidationError') {
    errorMessage = Object.values(error.errors)
      .map((singleErr: any) => singleErr.message)
      .join(',');
    error.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.code && error.code === 11000) {
    errorMessage = `This ${Object.keys(error.keyValue)} already exists in records`;
    error.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.name === 'CastError') {
    errorMessage = `No item found with ${error.value}`;
    error.statusCode = StatusCodes.NOT_FOUND;
  }

  const finalErrorMessage = errorMessage || error.message || 'Something went wrong';
  const finalErrorCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  return { statusCode: finalErrorCode, message: finalErrorMessage, data: null, success: false };
}

export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^/?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^/?]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^/?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export const extractInstagramVideoId = (url: string): string | null => {
  const patterns = [/(?:https?:\/\/)?(?:www\.)?instagram\.com\/reel\/([^/?]+)/, /(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/([^/?]+)/];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

export const handleNumericInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  field: any,
  options?: {
    allowFloat?: boolean;
    asString?: boolean;
  }
) => {
  const inputValue = e.target.value;

  if (inputValue.endsWith('.') && options?.allowFloat) {
    return field.onChange(inputValue);
  }

  const parsedValue = parseFloat(inputValue);

  if (options?.asString) {
    return field.onChange(inputValue);
  }

  return field.onChange(isNaN(parsedValue) ? 0 : parsedValue);
};
