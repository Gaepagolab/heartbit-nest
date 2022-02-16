import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CoinEntity from './coin.entity';
import { CoinsService } from './coins.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoinEntity])],
  providers: [CoinsService],
  exports: [CoinsService],
})
export class CoinsModule {}
