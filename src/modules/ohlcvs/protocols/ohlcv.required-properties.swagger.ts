import { IsDateString, IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class OHLCVRequiredPropertiesSwagger {
  @IsDateString()
  datetime: Date;

  @ProtocolProperty({
    type: Number,
  })
  volume: number;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  open: number;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  close: number;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  high: number;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  low: number;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  candleId: number;
}
