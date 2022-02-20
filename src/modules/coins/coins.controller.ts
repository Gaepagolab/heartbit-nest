import { Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';

@SwaggerController('core', '[core] coin')
export class CoinsController {
  @Post('/coin')
  async post(): Promise<string> {
    return 'hi';
  }
}
