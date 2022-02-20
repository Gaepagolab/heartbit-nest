import { Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';

@SwaggerController('core', '[core] candle')
export class CandlesController {
  @Post()
  async post(): Promise<string> {
    return 'candle controller ';
  }
}
