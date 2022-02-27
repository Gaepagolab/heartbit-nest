import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function SwaggerController(controllerName: string, swaggerTagName?: string) {
  return applyDecorators(Controller(controllerName), ApiTags(swaggerTagName ?? controllerName));
}
