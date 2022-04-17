import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateResultDto } from '../dto/create-result.dto';
import { ResultOptionalPropertiesSwagger } from './result.optional-properties.swagger';
import { ResultRequiredPropertiesSwagger } from './result.required-properties.swagger';

export class CreateResultBody extends IntersectionType(
  PickType(ResultRequiredPropertiesSwagger, ['candleId', 'currentStart', 'currentEnd', 'findStart', 'findEnd']),
  PickType(ResultOptionalPropertiesSwagger, undefined),
) {
  toDto(): CreateResultDto {
    return CreateResultDto.from({ ...this });
  }
}
