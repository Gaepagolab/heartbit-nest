import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateFinanceDto } from '../dtos/create-finance.dto';
import { FinanceOptionalPropertiesSwagger } from './finance.optional-properties.swagger';
import { FinanceRequiredPropertiesSwagger } from './finance.requried-properties.swagger';

export class CreateFinanceBody extends IntersectionType(
  PickType(FinanceRequiredPropertiesSwagger, ['title', 'type']),
  PickType(FinanceOptionalPropertiesSwagger, ['content', 'twitterUrl', 'githubUrl', 'discordUrl', 'logoImageUrl']),
) {
  toDto(): CreateFinanceDto {
    return CreateFinanceDto.from({ ...this });
  }
}
