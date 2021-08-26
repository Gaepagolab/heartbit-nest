import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

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

export default User;
