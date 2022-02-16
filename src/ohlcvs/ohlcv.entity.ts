import { Column, Entity, ManyToOne } from 'typeorm';

import CandleEntity from '../candles/candle.entity';
import { BaseEntity } from '../database/base.entity';

@Entity({ name: 'ohlcvs' })
export default class OHLCVEntity extends BaseEntity {
  @Column()
  public datetime: string;

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
  public candle: CandleEntity;
}
