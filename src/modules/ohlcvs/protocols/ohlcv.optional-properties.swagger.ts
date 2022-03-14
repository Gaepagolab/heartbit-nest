import { IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class OHLCVOptionalPropertiesSwagger {
  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  datetime?: string;

  @ProtocolProperty({
    isOptional: true,
    type: Number,
  })
  @IsPositive()
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
}
