import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';

export function ArrayTransformer() {
  return applyDecorators(Transform(({ value }) => (Array.isArray(value) ? value : [value])));
}
