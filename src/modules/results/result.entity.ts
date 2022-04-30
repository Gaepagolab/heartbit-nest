import { Column, Entity, OneToOne } from 'typeorm';

import { IEntity } from '../../interfaces/entity';
import { CandleEntity } from '../candles/candle.entity';
import { BaseEntity } from '../database/base.entity';
import { Result } from './result.model';

@Entity({ name: 'results' })
export default class ResultEntity extends BaseEntity implements IEntity<Result> {
  @Column({ type: 'timestamptz' })
  public currentStart: Date;

  @Column({ type: 'timestamptz' })
  public currentEnd: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public findStart?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public findEnd?: Date;

  @OneToOne(() => CandleEntity, (candle: CandleEntity) => candle.result)
  public candle: CandleEntity;

  toModel(): Result {
    return new Result({
      ...this,
    });
  }
}
