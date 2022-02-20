import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CoinEntity from './coin.entity';
import { CoinsController } from './coins.controller';
import { CoinsRepository } from './coins.repository';
import { CoinsService } from './coins.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoinEntity])],
  controllers: [CoinsController],
  providers: [CoinsService, CoinsRepository],
})
export class CoinsModule {}
