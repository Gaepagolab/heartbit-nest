import { ApiProperty, IntersectionType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsPositive, ValidateNested } from 'class-validator';

import { ProtocolProperty } from '../../../core/decorators/protocol-properties';
import { CreateResultDto } from '../dto/create-result.dto';
import { ResultOptionalPropertiesSwagger } from './result.optional-properties.swagger';
import { ResultRequiredPropertiesSwagger } from './result.required-properties.swagger';

class Result extends IntersectionType(
  PickType(ResultRequiredPropertiesSwagger, ['accuracy', 'currentStart', 'currentEnd', 'findStart', 'findEnd']),
  PickType(ResultOptionalPropertiesSwagger, undefined),
) {}

export class CreateBulkResultsBody {
  @ProtocolProperty({
    type: Number,
  })
  @IsInt()
  @IsPositive()
  candleId: number;

  @ApiProperty({ type: [Result] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Result)
  results: Result[];

  toDtos(): CreateResultDto[] {
    const { candleId, results } = this;

    return results.map((result) => CreateResultDto.from({ ...result, candleId }));
  }
}
