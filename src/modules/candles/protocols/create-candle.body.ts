import { IntersectionType, PickType } from '@nestjs/swagger';
import { CandleOptionalPropertiesSwagger } from './candle.optional-properties.swagger';
import { CandleRequiredPropertiesSwagger } from './candle.required-properties.swagger';

export class CreateCandleBody extends IntersectionType(
  PickType(CandleRequiredPropertiesSwagger, ['type', 'coinId', 'ohldvs']),
  PickType(CandleOptionalPropertiesSwagger, undefined),
) {}
