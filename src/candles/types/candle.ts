import { CandleType } from './candle-type';

export interface ICandle {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  type: CandleType;
  coinId?: number;

  coin?: any;
  ohlcvs?: any;
}
