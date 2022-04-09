import { Coin } from '../../coins/coin.model';
import { OHLCV } from '../../ohlcvs/ohlcv.model';
import { Result } from '../../results/result.model';
import { CandleType } from './candle-type';

export interface ICandle {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  type: CandleType;
  coinId?: number;

  coin?: Coin;
  result?: Result;
  ohlcvs?: OHLCV[];
}
