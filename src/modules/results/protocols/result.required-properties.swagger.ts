import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsPositive } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class ResultRequiredPropertiesSwagger {
  @ApiProperty()
  @IsDateString()
  currentStart: Date;

  @ApiProperty()
  @IsDateString()
  currentEnd: Date;

  @ProtocolProperty({
    type: Number,
  })
  @IsPositive()
  candleId: number;
}
