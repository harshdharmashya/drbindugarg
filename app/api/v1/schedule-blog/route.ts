import { type NextRequest, NextResponse } from 'next/server';
import { updateScheduledBlogs } from '@/server/actions/blog.actions';
import { StatusCodes } from '@/constants/StatusCodes';

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.CRON_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: StatusCodes.UNAUTHORIZED });
    }

    const result = await updateScheduledBlogs();

    if (!result || !result.success) {
      return NextResponse.json({ error: 'Failed to update blogs' }, { status: StatusCodes.BAD_REQUEST });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in update-blog-status API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: StatusCodes.INTERNAL_SERVER_ERROR });
  }
}
