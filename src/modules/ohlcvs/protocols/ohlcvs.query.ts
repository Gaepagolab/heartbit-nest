import { BadRequestException } from '@nestjs/common';
import { IntersectionType, PickType } from '@nestjs/swagger';

import { OHLCVFilterDto } from '../dtos/ohlcv.filter.dto';
import { OHLCVOptionalPropertiesSwagger } from './ohlcv.optional-properties.swagger';
import { OHLCVRequiredPropertiesSwagger } from './ohlcv.required-properties.swagger';

export class OHLCVsQuery extends IntersectionType(
  // line break
  PickType(OHLCVRequiredPropertiesSwagger, ['candleId']),
  PickType(OHLCVOptionalPropertiesSwagger, ['from', 'to']),
) {
  toOHLCVFilterDto(): OHLCVFilterDto {
    if (
      (this.from !== undefined && this.to === undefined) ||
      // line break
      (this.from === undefined && this.to !== undefined)
    ) {
      throw new BadRequestException("invalid query: from and to doesn't both exsits");
    }

    return OHLCVFilterDto.from({ ...this });
  }
}
