import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CandleEntity } from './candle.entity';
import { CandlesController } from './candles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CandleEntity])],
  controllers: [CandlesController],
})
export class CandlesModule {}
