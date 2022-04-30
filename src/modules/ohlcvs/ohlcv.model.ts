import { Candle } from '../candles/candle.model';
import { IModel } from '../../interfaces/model';
import { IOHLCV } from './types/ohlcv';

export class OHLCV implements IModel, IOHLCV {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;
  public datetime: Date;
  public volume: number;
  public open: number;
  public close: number;
  public high: number;
  public low: number;
  public candleId: number;
  public candle?: Candle;

  constructor({ id, createdAt, updatedAt, datetime, volume, open, close, high, low, candleId, candle }: IOHLCV) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.datetime = datetime;
    this.volume = volume;
    this.open = open;
    this.close = close;
    this.high = high;
    this.low = low;
    this.candleId = candleId;
    this.candle = candle;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      datetime: this.datetime,
      volume: this.volume,
      open: this.open,
      close: this.close,
      high: this.high,
      low: this.low,
      candleId: this.candleId,
      candle: this.candle,
    };
  }
}
