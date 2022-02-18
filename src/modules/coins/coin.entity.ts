import { Column, Entity, OneToMany } from 'typeorm';

import { IEntity } from '../../interfaces/entity';
import { CandleEntity } from '../candles/candle.entity';
import { BaseEntity } from '../database/base.entity';
import { Coin } from './coin.model';

@Entity({ name: 'coins' })
export default class CoinEntity extends BaseEntity implements IEntity<Coin> {
  @Column({ unique: true })
  public name: string;

  @OneToMany(() => CandleEntity, (candleEntity) => candleEntity.coin)
  public candles: CandleEntity[];

  toModel(): Coin {
    return new Coin({
      ...this,
      candles: this.candles?.toModels(),
    });
  }
}
