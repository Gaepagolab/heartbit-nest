import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CandleEntity } from './candle.entity';
import { CandlesController } from './candles.controller';
import { CandlesRepository } from './candles.repository';
import { CandlesService } from './candles.service';

@Module({
  imports: [TypeOrmModule.forFeature([CandleEntity])],
  controllers: [CandlesController],
  providers: [CandlesService, CandlesRepository],
})
export class CandlesModule {}
