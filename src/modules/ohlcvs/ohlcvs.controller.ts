import { Body, Get, Post, Query } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { OHLCV } from './ohlcv.model';
import { OHLCVsService } from './ohlcvs.service';
import { OHLCVsQuery } from './protocols/ohlcvs.query';
import { PostCreateBulkBody } from './protocols/post-createBulk.body';

@SwaggerController('ohlcvs')
export class OHLCVsController {
  constructor(private readonly ohlcvsServce: OHLCVsService) {}

  @Post()
  async post(@Body() body: PostCreateBulkBody): Promise<OHLCV[]> {
    return this.ohlcvsServce.createBulk(body.toDtos());
  }

  @Get()
  async getAll(@Query() query: OHLCVsQuery): Promise<any> {
    return query;
  }
}
