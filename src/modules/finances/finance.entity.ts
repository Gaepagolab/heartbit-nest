import { Entity, Column } from 'typeorm';
import { IEntity } from '../../interfaces/entity';
import { enumToArray } from '../../utils/type-converter';

import { BaseEntity } from '../database/base.entity';
import { Finance } from './finance.model';
import { IFinance } from './types/finance';
import { FinanceType } from './types/finance-type';

@Entity({ name: 'finances' })
export default class FinanceEntity extends BaseEntity implements IEntity<IFinance> {
  @Column()
  public title: string;

  @Column({
    type: 'enum',
    enum: enumToArray(FinanceType),
    enumName: 'finance_type_enum',
  })
  type: FinanceType;

  @Column({ nullable: true })
  public content?: string;

  @Column({ nullable: true })
  twitterUrl?: string;

  @Column({ nullable: true })
  githubUrl?: string;

  @Column({ nullable: true })
  discordUrl?: string;

  @Column({ nullable: true })
  logoImageUrl?: string;

  @Column({ default: false })
  isDeleted: boolean;

  toModel(): Finance {
    return new Finance({
      ...this,
    });
  }
}
