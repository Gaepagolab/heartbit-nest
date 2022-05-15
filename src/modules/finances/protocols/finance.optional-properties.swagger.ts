import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { enumToArray } from '../../../utils/type-converter';
import { FinanceType } from '../types/finance-type';

export class FinanceOptionalPropertiesSwagger {
  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  content?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  twitterUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  githubUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  discordUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  logoImageUrl?: string;

  @ApiPropertyOptional({ type: 'enum', enum: enumToArray(FinanceType) })
  @IsOptional()
  @IsEnum(enumToArray(FinanceType))
  type?: FinanceType;
}
