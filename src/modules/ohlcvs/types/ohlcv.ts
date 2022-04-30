import { Candle } from '../../candles/candle.model';

export interface IOHLCV {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  datetime: Date;
  volume: number;
  open: number;
  close: number;
  high: number;
  low: number;

  candleId: number;
  candle?: Candle;
}
