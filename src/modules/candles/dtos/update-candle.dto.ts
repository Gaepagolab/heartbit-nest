import { CandleType } from '../types/candle-type';

export class UpdateCandleDto {
  static from(options: { coinId?: number; type?: CandleType }): UpdateCandleDto {
    const it = new UpdateCandleDto();

    if (options.hasOwnProperty('coinId')) it.coinId = options.coinId;
    if (options.hasOwnProperty('type')) it.type = options.type;

    return it;
  }
  coinId?: number;
  type?: CandleType;
}
