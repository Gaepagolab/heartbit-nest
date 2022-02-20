import { IModel } from '../../interfaces/model';
import { IUser } from './types/user';

export class User implements IModel, IUser {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;

  public name: string;
  public email: string;
  public password?: string;

  public isEmailConfirmed: boolean;
  public isRegisteredWithGoogle: boolean;

  public currentHashedRefreshToken?: string;

  constructor({
    id,
    createdAt,
    updatedAt,
    name,
    email,
    password,
    isEmailConfirmed,
    isRegisteredWithGoogle,
    currentHashedRefreshToken,
  }: IUser) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isEmailConfirmed = isEmailConfirmed;
    this.isRegisteredWithGoogle = isRegisteredWithGoogle;
    this.currentHashedRefreshToken = currentHashedRefreshToken;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this.name,
      email: this.email,
      isEmailConfirmed: this.isEmailConfirmed,
      isRegisteredWithGoogle: this.isRegisteredWithGoogle,
    };
  }
}
