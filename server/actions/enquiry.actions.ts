'use server';

import { StatusCodes } from '@/constants/StatusCodes';
import Enquiry, { EnquiryDocument, IEnquiry } from '@/server/models/enquiry.model';
import { APIQueryParams, IAPIResponse } from '@/types/dashboard';
import { connectToDB } from '../mongoose';
import { toPlainObject } from '@/lib/utils';
import { AggregateQueryManager } from '../helpers';
import { traceErrors } from '@/lib/utils';
import { contactFormSchema } from '@/components/forms/ContactForm';
import { z } from 'zod';
import { CRM_API_URL } from '@/constants/admin';

export async function createAPIEnquiry(payload: Partial<IEnquiry>): Promise<IAPIResponse> {
  try {
    const response = await fetch(`${CRM_API_URL}/api/v1/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CRM_API_SECRET_KEY || '',
      },
      body: JSON.stringify({ ...payload, leadBy: 'Cyberbizz', leadFrom: 'Google' }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit enquiry');
    }

    await connectToDB();
    await Enquiry.create(payload);

    return { success: true, statusCode: StatusCodes.CREATED, message: 'Enquiry created successfully' };
  } catch (error: any) {
    console.error('Error submitting enquiry:', error.message);
    return { success: false, statusCode: StatusCodes.BAD_REQUEST, message: 'Failed to submit enquiry' };
  }
}

export async function getAllEnquiries({ queryParams }: { queryParams: APIQueryParams }) {
  try {
    await connectToDB();

    const baseAggregation = [{ $match: {} }];

    if (queryParams.callStatus) {
      delete queryParams.callStatus;
    }

    if (queryParams.followUpStatus) {
      delete queryParams.followUpStatus;
    }

    const queryManager = new AggregateQueryManager({ model: Enquiry, baseAggregation, queryString: queryParams }).filter().sort().paginate();

    const enquiries = await queryManager.execute();
    const pagination = await queryManager.getPaginationMetadata();

    return {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Enquiries fetched successfully',
      data: {
        enquiries: toPlainObject(enquiries) as EnquiryDocument[],
        pagination,
      },
    };
  } catch (error: any) {
    console.error('Error fetching all enquiries:', error);
    return traceErrors(error);
  }
}

export async function createContactEnquiry(payload: Partial<z.infer<typeof contactFormSchema>>) {
  try {
    payload.message = `Subject: ${payload.subject}; Message: ${payload.message}`;
    delete payload.subject;

    const newPayload = {
      message: payload.message || '',
      fullName: payload.fullName || '',
      email: payload.email || '',
      phone: payload.phone || '',
      pageUrl: payload.pageUrl || '',
      pageTitle: payload.pageTitle || '',
    };

    const response = await createAPIEnquiry(newPayload);

    if (!response.success) {
      throw new Error(response.message);
    }

    return {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: 'Contact request sent successfully',
    };
  } catch (error: any) {
    console.error('Error creating contact request:', error);
    return traceErrors(error);
  }
}
