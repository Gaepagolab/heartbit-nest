import { Entity, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

import { BaseEntity } from '../database/base.entity';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity {
  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  public name: string;

  @Column({ nullable: true })
  @Exclude()
  public password: string;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;
}
