import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

import { CandleOptionalPropertiesSwagger } from '../../candles/protocols/candle.optional-properties.swagger';
import { CandleRequiredPropertiesSwagger } from '../../candles/protocols/candle.required-properties.swagger';
import { CoinOptionalPropertiesSwagger } from './fleet.optional-properties.swagger';
import { CoinRequiredPropertiesSwagger } from './fleet.required-properties.swagger';

class Candle extends IntersectionType(
  PickType(CandleRequiredPropertiesSwagger, ['type', 'ohldvs']),
  PickType(CandleOptionalPropertiesSwagger, undefined),
) {}

export class PostCoinBody extends IntersectionType(
  PickType(CoinRequiredPropertiesSwagger, ['name']),
  PickType(CoinOptionalPropertiesSwagger, undefined),
) {
  @ApiProperty({
    type: [Candle],
    default: [],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Candle)
  candles: Candle[];
}
