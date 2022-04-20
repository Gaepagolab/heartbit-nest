import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateCandleDto } from '../dtos/create-candle.dto';
import { CandleOptionalPropertiesSwagger } from './candle.optional-properties.swagger';
import { CandleRequiredPropertiesSwagger } from './candle.required-properties.swagger';

export class CreateCandleBody extends IntersectionType(
  PickType(CandleRequiredPropertiesSwagger, ['type', 'coinId']),
  PickType(CandleOptionalPropertiesSwagger, undefined),
) {
  toCreateCandleDto(): CreateCandleDto {
    const { type, coinId } = this;

    return CreateCandleDto.from({ type, coinId });
  }
}
