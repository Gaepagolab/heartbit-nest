import { Body, Get, Param, Post, Query } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { Candle } from './candle.model';
import { CandlesService } from './candles.service';
import { OHLCVsService } from '../ohlcvs/ohlcvs.service';
import { PostCandleBody } from './protocols/post-candle.body';

@SwaggerController('candles')
export class CandlesController {
  constructor(
    // line break
    private readonly candlesService: CandlesService,
    private readonly ohlcvsService: OHLCVsService,
  ) {}

  @Post()
  async post(@Body() body: PostCandleBody): Promise<Candle> {
    const candle = await this.candlesService.create(body.toCreateCandleDto());
    console.log(candle);
    const createOHLCVDtos = body.toCreateOHLCVDtos(candle.id);
    const ohlcvs = await this.ohlcvsService.createBulk(createOHLCVDtos);

    candle.ohlcvs = ohlcvs;

    return candle;
  }

  @Get('/:id')
  async get(@Param('id') id: number): Promise<Candle> {
    return this.candlesService.findByPk(id);
  }

  @Get()
  async getByCoinId(@Query('coinId') coinId: number): Promise<Candle[]> {
    return this.candlesService.findByCoinId(coinId);
  }
}
