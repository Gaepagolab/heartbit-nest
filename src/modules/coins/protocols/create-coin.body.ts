import { IntersectionType, PickType } from '@nestjs/swagger';

import { CreateCoinDto } from '../dtos/create-coin.dto';
import { CoinOptionalPropertiesSwagger } from './coin.optional-properties.swagger';
import { CoinRequiredPropertiesSwagger } from './coin.required-properties.swagger';

export class CreateCoinBody extends IntersectionType(
  PickType(CoinRequiredPropertiesSwagger, ['name']),
  PickType(CoinOptionalPropertiesSwagger, undefined),
) {
  toDto(): CreateCoinDto {
    const { name } = this;
    return CreateCoinDto.from({ name });
  }
}
