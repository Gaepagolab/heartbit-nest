import { Body, Get, Post } from '@nestjs/common';

import { Coin } from './coin.model';
import { CoinsService } from './coins.service';
import { CreateCoinBody } from './protocols/create-coin.body';
import { SwaggerController } from '../../core/decorators/controller.decorator';

@SwaggerController('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Post()
  async post(@Body() createCoinBody: CreateCoinBody): Promise<Coin> {
    return await this.coinsService.create(createCoinBody.toDto());
  }

  @Get()
  async getAll(): Promise<Coin[]> {
    return await this.coinsService.findAll();
  }
}
