import { IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class OHLCVRequiredPropertiesSwagger {
  @ProtocolProperty({
    type: String,
  })
  datetime: string;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
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
