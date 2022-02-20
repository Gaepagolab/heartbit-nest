import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { PostCoinBody } from './protocols/post-coin.body';

@SwaggerController('core', '[core] coin')
export class CoinsController {
  @Post('/coin')
  async post(@Body() createCoinBody: PostCoinBody): Promise<any> {
    return createCoinBody;
  }
}
