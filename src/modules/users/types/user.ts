export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  name: string;
  email: string;
  password?: string;
  isEmailConfirmed: boolean;
  isRegisteredWithGoogle: boolean;
  currentHashedRefreshToken?: string;
}
