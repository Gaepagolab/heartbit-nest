import { Candle } from '../../candles/candle.model';

export interface IResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  accuracy: number;
  currentStart: string;
  currentEnd: string;
  findStart: string;
  findEnd: string;

  candleId: number;
  candle?: Candle;
}
