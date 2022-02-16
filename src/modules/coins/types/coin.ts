import { Candle } from '../../candles/candle.model';

export interface ICoin {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  name: string;
  candles: Candle[];
}
