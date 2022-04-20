import { Body, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { Candle } from './candle.model';
import { CandlesService } from './candles.service';
import { CreateCandleBody } from './protocols/create-candle.body';
import { UpdateCandleBody } from './protocols/update-candle.body';

@SwaggerController('candles')
export class CandlesController {
  constructor(
    // line break
    private readonly candlesService: CandlesService,
  ) {}

  @Post()
  async post(@Body() body: CreateCandleBody): Promise<Candle> {
    const candle = await this.candlesService.create(body.toCreateCandleDto());

    return candle;
  }

  @Get('/:id')
  async get(@Param('id') id: number): Promise<Candle> {
    return await this.candlesService.findByPk(id);
  }

  @Get()
  async getByCoinId(@Query('coinId') coinId: number): Promise<Candle[]> {
    return await this.candlesService.findByCoinId(coinId);
  }

  @Patch('/:id')
  async patch(@Param('id') id: number, @Body() body: UpdateCandleBody) {
    return body;
  }
}
