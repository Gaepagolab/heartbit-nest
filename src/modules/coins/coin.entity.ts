import { Column, Entity, OneToMany } from 'typeorm';
import CandleEntity from '../candles/candle.entity';
import { BaseEntity } from '../database/base.entity';

@Entity({ name: 'coins' })
export default class CoinEntity extends BaseEntity {
  @Column({ unique: true })
  public name: string;

  @OneToMany(() => CandleEntity, (candleEntity) => candleEntity.coin)
  public candles: CandleEntity[];
}
