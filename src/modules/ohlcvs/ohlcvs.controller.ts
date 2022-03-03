import { Post } from '@nestjs/common';

import { SwaggerController } from '../../core/decorators/controller.decorator';
import { OHLCVsService } from './ohlcvs.service';

@SwaggerController('ohlcvs')
export class OHLCVsController {
  constructor(private readonly ohlcvsServce: OHLCVsService) {}

  @Post('/createBulk')
  async createBulk(): Promise<string> {
    return 'hi';
  }
}
