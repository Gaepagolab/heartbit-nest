import { IntersectionType, PickType } from '@nestjs/swagger';

import { UpdateCandleDto } from '../dtos/update-candle.dto';
import { CreateResultDto } from '../../results/dto/create-result.dto';
import { CandleOptionalPropertiesSwagger } from './candle.optional-properties.swagger';
import { CandleRequiredPropertiesSwagger } from './candle.required-properties.swagger';

export class UpdateCandleBody extends IntersectionType(
  PickType(CandleRequiredPropertiesSwagger, []),
  PickType(CandleOptionalPropertiesSwagger, ['type', 'coinId', 'result']),
) {
  toUpdateCandleDto(): UpdateCandleDto {
    const { type, coinId } = this;

    return UpdateCandleDto.from({ type, coinId });
  }

  toCreateResultDto(): CreateResultDto {
    const { result } = this;

    return CreateResultDto.from({ ...result });
  }
}
