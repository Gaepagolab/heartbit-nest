import { IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class ResultRequiredPropertiesSwagger {
  @ProtocolProperty({
    type: Number,
  })
  accuracy: number;

  @ProtocolProperty({
    type: String,
  })
  currentStart: string;

  @ProtocolProperty({
    type: String,
  })
  currentEnd: string;

  @ProtocolProperty({
    type: String,
  })
  findStart: string;

  @ProtocolProperty({
    type: String,
  })
  findEnd: string;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  candleId: number;
}
