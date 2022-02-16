import { IModel } from '../interfaces/model';
import { ICandle } from './types/candle';
import { CandleType } from './types/candle-type';
import { Coin } from '../coins/coin.model';
import { OHLCV } from '../ohlcvs/ohlcv.model';

export class Candle implements IModel, ICandle {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;

  public type: CandleType;
  public coinId?: number;
  public coin?: Coin;
  public ohlcvs?: OHLCV[];

  constructor({
    id,
    createdAt,
    updatedAt,
    type,
    coinId,
    coin,
    ohlcvs,
  }: ICandle) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.type = type;
    this.coinId = coinId;
    this.coin = coin;
    this.ohlcvs = ohlcvs;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      type: this.type,
      coinId: this.coinId,
      coin: this.coin,
      ohlcvs: this.ohlcvs,
    };
  }
}
