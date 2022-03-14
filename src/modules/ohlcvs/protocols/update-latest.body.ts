import { IntersectionType, PickType } from '@nestjs/swagger';

import { UpdateOHLCVDto } from '../dtos/update-ohlcv.dto';
import { OHLCVOptionalPropertiesSwagger } from './ohlcv.optional-properties.swagger';
import { OHLCVRequiredPropertiesSwagger } from './ohlcv.required-properties.swagger';

export class UpdateLatestBody extends IntersectionType(
  PickType(OHLCVRequiredPropertiesSwagger, ['candleId', 'datetime', 'open', 'high', 'close', 'low', 'volume']),
  PickType(OHLCVOptionalPropertiesSwagger, undefined),
) {
  toDtos(): UpdateOHLCVDto {
    const { datetime, open, high, close, low, volume } = this;

    return UpdateOHLCVDto.from({ datetime, open, high, close, low, volume });
  }
}
