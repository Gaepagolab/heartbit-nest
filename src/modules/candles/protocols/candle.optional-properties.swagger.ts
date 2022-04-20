import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { enumToArray } from '../../../utils/type-converter';
import { UpdateResultBody } from '../../results/protocols/update-result.body';
import { CandleType } from '../types/candle-type';

export class CandleOptionalPropertiesSwagger {
  @ProtocolProperty({
    type: Number,
    isOptional: true,
  })
  coinId?: number;

  @ApiPropertyOptional({ type: 'enum', enum: enumToArray(CandleType) })
  @IsOptional()
  @IsEnum(enumToArray(CandleType))
  type?: CandleType;

  // TODO: apply '@ProtocolProperty'
  @ApiPropertyOptional({
    default: {
      currentStart: '2022-04-01 00:00',
      currentEnd: '2022-04-07 00:00',
      findStart: '2020-04-01 00:00',
      findEnd: '2020-04-07 00:00',
    },
  })
  @ValidateNested()
  @Type(() => UpdateResultBody)
  result?: UpdateResultBody;
}
