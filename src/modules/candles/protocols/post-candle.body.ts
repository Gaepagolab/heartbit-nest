import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateOHLCVDto } from '../../ohlcvs/dtos/create-ohlcv.dto';
import { CreateCandleDto } from '../dtos/create-candle.dto';
import { CandleOptionalPropertiesSwagger } from './candle.optional-properties.swagger';
import { CandleRequiredPropertiesSwagger } from './candle.required-properties.swagger';

export class PostCandleBody extends IntersectionType(
  PickType(CandleRequiredPropertiesSwagger, ['type', 'coinId', 'ohlcvs']),
  PickType(CandleOptionalPropertiesSwagger, undefined),
) {
  toCreateCandleDto(): CreateCandleDto {
    const { type, coinId } = this;

    return CreateCandleDto.from({ type, coinId });
  }

  toCreateOHLCVDtos(candleId: number): CreateOHLCVDto[] {
    const { ohlcvs } = this;

    return ohlcvs.map((ohlcv) => CreateOHLCVDto.from({ ...ohlcv, candleId }));
  }
}
