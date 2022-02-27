import { Exclude } from 'class-transformer';
import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../database/base.entity';
import { IEntity } from '../../interfaces/entity';
import { User } from './user.model';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity implements IEntity<User> {
  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  public name: string;

  @Exclude()
  @Column({ nullable: true })
  public password: string;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Exclude()
  @Column({
    nullable: true,
  })
  public currentHashedRefreshToken?: string;

  toModel(): User {
    return new User({
      ...this,
    });
  }
}
