import { Candle } from '../candles/candle.model';
import { IModel } from '../interfaces/model';
import { ICoin } from './types/coin';

export class Coin implements IModel, ICoin {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;
  public name: string;
  public candles: Candle[];

  constructor({ id, createdAt, updatedAt, name, candles }: ICoin) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.name = name;
    this.candles = candles;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this.candles,
      candles: this.candles,
    };
  }
}
