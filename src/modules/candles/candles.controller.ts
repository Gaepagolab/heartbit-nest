import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { CreateCandleBody } from './protocols/create-candle.body';

@SwaggerController('core', '[core] candle')
export class CandlesController {
  @Post('/candle')
  async post(@Body() createCandleBody: CreateCandleBody): Promise<any> {
    return createCandleBody;
  }
}
