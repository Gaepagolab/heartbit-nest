import { ApiProperty } from '@nestjs/swagger';

import { IsEnum, IsInt, IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { enumToArray } from '../../../utils/type-converter';
import { CandleType } from '../types/candle-type';

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
}
