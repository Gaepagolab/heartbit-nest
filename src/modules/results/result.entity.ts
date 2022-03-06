import { Column, Entity, ManyToOne } from 'typeorm';

import { IEntity } from '../../interfaces/entity';
import { CandleEntity } from '../candles/candle.entity';
import { BaseEntity } from '../database/base.entity';
import { Result } from './result.model';

@Entity({ name: 'results' })
export default class ResultEntity extends BaseEntity implements IEntity<Result> {
  @Column()
  public accuracy: number;

  @Column()
  public currentStart: string;

  @Column()
  public currentEnd: string;

  @Column()
  public findStart: string;

  @Column()
  public findEnd: string;

  @Column()
  public candleId: number;

  @ManyToOne(() => CandleEntity, (candleEntity) => candleEntity.results)
  public candle?: CandleEntity;

  toModel(): Result {
    return new Result({
      ...this,
      candle: this.candle?.toModel(),
    });
  }
}
