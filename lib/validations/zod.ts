import * as z from 'zod';

const PHONE_MIN_LENGTH = 10;
const PHONE_MAX_LENGTH = 20;

export const phoneSchema = z
  .string()
  .trim()
  .transform((val) => {
    let normalizedNumber = val.replace(/[^\d+]/g, '');

    const prefixes = ['+', '00', '0'];
    for (const prefix of prefixes) {
      if (normalizedNumber.startsWith(prefix)) {
        normalizedNumber = normalizedNumber.slice(prefix.length);
        break;
      }
    }

    return val;
  })
  .refine((val) => val.length >= PHONE_MIN_LENGTH && val.length <= PHONE_MAX_LENGTH, {
    message: `Phone number must be between ${PHONE_MIN_LENGTH} and ${PHONE_MAX_LENGTH} digits.`,
  })
  .refine((val) => /^[+\d]+$/.test(val), {
    message: 'Phone number must contain only digits and optionally start with +.',
  });
