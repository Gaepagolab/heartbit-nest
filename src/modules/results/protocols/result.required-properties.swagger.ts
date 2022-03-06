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
  @IsPositive()
  currentStart: string;

  @ProtocolProperty({
    type: String,
  })
  @IsPositive()
  currentEnd: string;

  @ProtocolProperty({
    type: String,
  })
  @IsPositive()
  findStart: string;

  @ProtocolProperty({
    type: String,
  })
  @IsPositive()
  findEnd: string;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  candleId: number;
}
