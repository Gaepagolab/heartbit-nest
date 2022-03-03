import { Body, Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { OHLCV } from './ohlcv.model';
import { OHLCVsService } from './ohlcvs.service';
import { PostCreateBulkBody } from './protocols/post-createBulk.body';

@SwaggerController('ohlcvs')
export class OHLCVsController {
  constructor(private readonly ohlcvsServce: OHLCVsService) {}

  @Post()
  async post(@Body() body: PostCreateBulkBody): Promise<OHLCV[]> {
    return this.ohlcvsServce.createBulk(body.toDtos());
  }
}
