import 'server-only';

import { cache } from 'react';
import { verifySession } from '@/server/auth';
import User from '@/server/models/user.model';
import { connectToDB } from '@/server/mongoose';
import { createTokenUser } from '@/server/actions/auth.actions';

export const getCurrentUser = cache(async () => {
  await connectToDB();

  const session = await verifySession();
  if (!session) return null;

  try {
    const user = await User.findById(session.userId);
    if (!user) return null;

    const tokenUser = await createTokenUser(user);

    return tokenUser;
  } catch (error: any) {
    console.log('Failed to fetch user', error.message);
    return null;
  }
});