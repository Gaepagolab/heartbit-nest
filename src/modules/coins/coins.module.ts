import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CoinEntity from './coin.entity';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoinEntity])],
  providers: [CoinsService],
  exports: [CoinsService],
  controllers: [CoinsController],
})
export class CoinsModule {}
