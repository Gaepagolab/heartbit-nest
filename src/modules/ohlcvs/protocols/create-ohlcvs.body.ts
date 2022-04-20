import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { CreateOHLCVDto } from '../dtos/create-ohlcv.dto';
import { OHLCVOptionalPropertiesSwagger } from './ohlcv.optional-properties.swagger';
import { OHLCVRequiredPropertiesSwagger } from './ohlcv.required-properties.swagger';

class OHLCV extends IntersectionType(
  PickType(OHLCVRequiredPropertiesSwagger, ['datetime', 'open', 'high', 'close', 'low', 'volume']),
  PickType(OHLCVOptionalPropertiesSwagger, []),
) {}

export class CreateOHLCVsBody {
  @ProtocolProperty({
    type: Number,
  })
  @IsInt()
  @IsPositive()
  candleId: number;

  @ApiProperty({ type: [OHLCV] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OHLCV)
  ohlcvs: OHLCV[];

  toDtos(): CreateOHLCVDto[] {
    const { candleId, ohlcvs } = this;

    return ohlcvs.map((ohlcv) => CreateOHLCVDto.from({ ...ohlcv, candleId }));
  }
}
