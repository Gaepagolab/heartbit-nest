import { CandleType } from '../types/candle-type';

export class CreateCandleDto {
  static from(options: { type: CandleType; coinId: number }): CreateCandleDto {
    const it = new CreateCandleDto();
    const { type, coinId } = options;

    it.type = type;
    it.coinId = coinId;

    return it;
  }

  type: CandleType;
  coinId: number;
}
