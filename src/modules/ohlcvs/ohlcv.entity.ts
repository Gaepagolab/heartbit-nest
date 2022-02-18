import { Column, Entity, ManyToOne } from 'typeorm';
import { IEntity } from '../../interfaces/entity';
import { CandleEntity } from '../candles/candle.entity';

import { BaseEntity } from '../database/base.entity';
import { OHLCV } from './ohlcv.model';

@Entity({ name: 'ohlcvs' })
export default class OHLCVEntity extends BaseEntity implements IEntity<OHLCV> {
  @Column()
  public datetime: string;

  @Column()
  public candleId: number;

  @Column()
  public volume: number;

  @Column({ type: 'double precision' })
  public open: number;

  @Column({ type: 'double precision' })
  public close: number;

  @Column({ type: 'double precision' })
  public high: number;

  @Column({ type: 'double precision' })
  public low: number;

  @ManyToOne(() => CandleEntity, (candleEntity) => candleEntity.ohlcvs)
  public candle?: CandleEntity;

  toModel(): OHLCV {
    return new OHLCV({
      ...this,
      candle: this.candle?.toModel(),
    });
  }
}
