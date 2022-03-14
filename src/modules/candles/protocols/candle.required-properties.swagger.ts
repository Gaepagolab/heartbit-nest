import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsPositive, ValidateNested } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { enumToArray } from '../../../utils/type-converter';
import { OHLCVOptionalPropertiesSwagger } from '../../ohlcvs/protocols/ohlcv.optional-properties.swagger';
import { OHLCVRequiredPropertiesSwagger } from '../../ohlcvs/protocols/ohlcv.required-properties.swagger';
import { CandleType } from '../types/candle-type';

class OHLCV extends IntersectionType(
  PickType(OHLCVRequiredPropertiesSwagger, ['datetime', 'open', 'high', 'close', 'low', 'volume']),
  PickType(OHLCVOptionalPropertiesSwagger, []),
) {}

export class CandleRequiredPropertiesSwagger {
  @ApiProperty({
    enum: enumToArray(CandleType),
    default: CandleType.OneDay,
  })
  @IsEnum(enumToArray(CandleType))
  type: CandleType;

  @ProtocolProperty({
    type: Number,
  })
  @IsInt()
  @IsPositive()
  coinId: number;

  @ApiProperty({ type: [OHLCV] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OHLCV)
  ohlcvs: OHLCV[];
}
