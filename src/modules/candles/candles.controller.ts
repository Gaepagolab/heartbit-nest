import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { Candle } from './candle.model';
import { CandlesService } from './candles.service';
import { PostCandleBody } from './protocols/post-candle.body';

@SwaggerController('core', '[core] candle')
export class CandlesController {
  constructor(private readonly candlesService: CandlesService) {}

  @Post('/candle')
  async post(@Body() body: PostCandleBody): Promise<Candle> {
    const candle = await this.candlesService.create(body.toCreateCandleDto());

    return candle;
  }
}
