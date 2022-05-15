import { IntersectionType, PickType } from '@nestjs/swagger';
import { FinanceFilterDto } from '../dtos/finance.filter.dto';
import { FinanceOptionalPropertiesSwagger } from './finance.optional-properties.swagger';

export class FinanceQuery extends IntersectionType(
  // line break
  PickType(FinanceOptionalPropertiesSwagger, ['type']),
  PickType(FinanceOptionalPropertiesSwagger, []),
) {
  toFinanceFilterDto(): FinanceFilterDto {
    return FinanceFilterDto.from({ ...this });
  }
}
