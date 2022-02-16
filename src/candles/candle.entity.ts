import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import CoinEntity from '../coins/coin.entity';
import { BaseEntity } from '../database/base.entity';
import OHLCVEntity from '../ohlcvs/ohlcv.entity';
import { enumToArray } from '../utils/type-converter';
import { CandleType } from './types/candle-type';

@Entity({ name: 'candles' })
export default class CandleEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: enumToArray(CandleType),
    enumName: 'candle_type_enum',
  })
  type: CandleType;

  @ManyToOne(() => CoinEntity, (coinEntity) => coinEntity.candles)
  public coin?: CoinEntity;

  @OneToMany(() => OHLCVEntity, (ohlcvEntity) => ohlcvEntity.candle)
  public ohlcvs: OHLCVEntity[];
}
