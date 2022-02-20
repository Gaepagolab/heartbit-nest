/* eslint-disable @typescript-eslint/ban-ts-comment */
import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsOptional } from 'class-validator';
import * as Validator from 'class-validator';
import { ArrayTransformer } from './array-transformer';
import * as _ from 'lodash';

interface PluralOption {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: [Function];
  allowEmpty?: boolean;
}
interface SingularOption {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type: Function;
}

interface CommonOption extends Omit<ApiPropertyOptions, 'type' | 'isArray'> {
  isOptional?: boolean;
}

type PropertyOptions = CommonOption & (PluralOption | SingularOption);

function isPlural(value: PropertyOptions): value is CommonOption & PluralOption {
  return Array.isArray(value.type);
}

export function ProtocolProperty(options: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  if (isPlural(options)) {
    decorators.push(Type(() => options.type[0]));
    decorators.push(ArrayTransformer());

    decorators.push(IsArray());

    if (options.isOptional !== true) {
      // @ts-ignore
      const validator = Validator[`Is${options.type[0].name}`];
      if (validator !== undefined) decorators.push(_.flip(validator)({ each: true }) as PropertyDecorator);
    }

    if (options.allowEmpty !== true) {
      decorators.push(ArrayNotEmpty());
    }
  } else {
    decorators.push(Type(() => options.type));

    // @ts-ignore
    const validator = Validator[`Is${options.type.name}`];
    if (validator !== undefined) decorators.push(validator());
  }

  if (options.isOptional === true) {
    decorators.push(
      ApiProperty({
        ...options,
        required: false,
      }),
    );
    decorators.push(IsOptional());
  } else {
    decorators.push(ApiProperty(options));
  }

  return applyDecorators(...decorators);
}
