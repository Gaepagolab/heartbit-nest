import { Body, Get, Patch, Post, Query } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { OHLCV } from './ohlcv.model';
import { OHLCVsService } from './ohlcvs.service';
import { OHLCVsQuery } from './protocols/ohlcvs.query';
import { CreateOHLCVsBody } from './protocols/create-ohlcvs.body';
import { UpdateLatestBody } from './protocols/update-latest.body';

@SwaggerController('ohlcvs')
export class OHLCVsController {
  constructor(private readonly ohlcvsServce: OHLCVsService) {}

  @Post()
  async post(@Body() body: CreateOHLCVsBody): Promise<OHLCV[]> {
    return await this.ohlcvsServce.createBulk(body.toDtos());
  }

  @Get()
  async getAll(@Query() query: OHLCVsQuery): Promise<OHLCV[]> {
    return await this.ohlcvsServce.findAllByFilter(query.toOHLCVFilterDto());
  }

  @Patch('/lastest')
  async updateLatest(@Body() body: UpdateLatestBody) {
    const latest = await this.ohlcvsServce.findLastestByCandleId(body.candleId);

    return await this.ohlcvsServce.update(latest.id, body.toDtos());
  }
}
