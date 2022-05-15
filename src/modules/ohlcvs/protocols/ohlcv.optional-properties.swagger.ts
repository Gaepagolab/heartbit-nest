import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class OHLCVOptionalPropertiesSwagger {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  datetime?: Date;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  volume?: number;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  @IsPositive()
  open?: number;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  @IsPositive()
  close?: number;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  @IsPositive()
  high?: number;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  @IsPositive()
  low?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  from?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  to?: Date;
}
