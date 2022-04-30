import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { enumToArray } from '../../../utils/type-converter';
import { FinanceType } from '../types/finance-type';

export class FinanceRequiredPropertiesSwagger {
  @ProtocolProperty({
    type: String,
    default: 'new finance',
  })
  title: string;

  @ApiProperty({
    enum: enumToArray(FinanceType),
    default: FinanceType.DEFI,
  })
  @IsEnum(enumToArray(FinanceType))
  type: FinanceType;
}
