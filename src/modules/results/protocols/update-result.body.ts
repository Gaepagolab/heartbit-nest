import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateResultDto } from '../dto/create-result.dto';
import { ResultOptionalPropertiesSwagger } from './result.optional-properties.swagger';
import { ResultRequiredPropertiesSwagger } from './result.required-properties.swagger';

export class UpdateResultBody extends IntersectionType(
  PickType(ResultRequiredPropertiesSwagger, ['currentStart', 'currentEnd', 'findStart', 'findEnd']),
  PickType(ResultOptionalPropertiesSwagger, undefined),
) {
  toDto(candleId: number): CreateResultDto {
    return CreateResultDto.from({ ...this, candleId });
  }
}
