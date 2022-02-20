import { Body, Post } from '@nestjs/common';

import { Coin } from './coin.model';
import { CoinsService } from './coins.service';
import { CreateCoinBody } from './protocols/post-coin.body';
import { SwaggerController } from '../../core/decorators/controller.decorator';

@SwaggerController('core', '[core] coin')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Post('/coin')
  async post(@Body() createCoinBody: CreateCoinBody): Promise<Coin> {
    return await this.coinsService.create(createCoinBody.toDto());
  }
}
