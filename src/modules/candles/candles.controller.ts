import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { PostCandleBody } from './protocols/post-candle.body';

@SwaggerController('core', '[core] candle')
export class CandlesController {
  @Post('/candle')
  async post(@Body() body: PostCandleBody): Promise<any> {
    return body;
  }
}
