import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import CoinEntity from '../coins/coin.entity';
import { BaseEntity } from '../database/base.entity';
import OHLCVEntity from '../ohlcvs/ohlcv.entity';
import { enumToArray } from '../../utils/type-converter';
import { CandleType } from './types/candle-type';
import { Candle } from './candle.model';
import { IEntity } from '../../interfaces/entity';
import ResultEntity from '../results/result.entity';
import { Result } from '../results/result.model';

@Entity({ name: 'candles' })
export class CandleEntity extends BaseEntity implements IEntity<Candle> {
  @Column({
    type: 'enum',
    enum: enumToArray(CandleType),
    enumName: 'candle_type_enum',
  })
  type: CandleType;

  @Column()
  public coinId: number;

  @ManyToOne(() => CoinEntity, (coinEntity) => coinEntity.candles)
  public coin?: CoinEntity;

  @OneToMany(() => OHLCVEntity, (ohlcvEntity) => ohlcvEntity.candle)
  public ohlcvs?: OHLCVEntity[];

  @OneToMany(() => ResultEntity, (resultEntity) => resultEntity.candle)
  public results?: ResultEntity[];

  toModel(): Candle {
    return new Candle({
      ...this,
      coin: this.coin?.toModel(),
      ohlcvs: this.ohlcvs?.toModels(),
      results: this.results?.toModels(),
    });
  }
}
