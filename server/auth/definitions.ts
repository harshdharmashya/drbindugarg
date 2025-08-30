export type CreateSessionPayload = {
  userId: string;
  role: string;
  isActive: boolean;
  name: string;
};

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
  role: string;
  isActive: boolean;
};
