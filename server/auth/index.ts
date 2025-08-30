import 'server-only';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { CreateSessionPayload, SessionPayload } from './definitions';

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

if (!secretKey) throw new Error('Security key is not defined in environment variables.');

// Encrypt the session using a JWT
export async function encryptSession(payload: SessionPayload) {
  try {
    return await new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('7d').sign(key);
  } catch (error: any) {
    console.error('Error encrypting session:', error.message);
    throw new Error('Failed to encrypt session.');
  }
}

// Decrypt and verify the session token
export async function decryptSession(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error: any) {
    console.error('Error decrypting session:', error.message);
    return null;
  }
}

// Create a session cookie for the user
export async function createSession({ userId, role, isActive }: CreateSessionPayload) {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = await encryptSession({ userId, role, isActive, expiresAt });

    cookies().set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    });
  } catch (error: any) {
    console.error('Error creating session:', error.message);
    throw new Error('Failed to create session.');
  }
}

// Verify the session stored in cookies
export async function verifySession() {
  try {
    const cookie = cookies().get('session')?.value;
    const session = await decryptSession(cookie);

    if (!session) throw new Error('Session not found');

    return { userId: session.userId };
  } catch (error: any) {
    console.error('Error verifying session:', error.message);
    return { userId: null };
  }
}

// Delete the session cookie
export async function deleteSession() {
  try {
    cookies().delete('session');
  } catch (error: any) {
    console.error('Error deleting session:', error.message);
    throw new Error('Failed to delete session.');
  }
}
