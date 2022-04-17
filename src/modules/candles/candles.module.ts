import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OHLCVsModule } from '../ohlcvs/ohlcvs.module';

import { CandleEntity } from './candle.entity';
import { CandlesController } from './candles.controller';
import { CandlesRepository } from './candles.repository';
import { CandlesService } from './candles.service';

@Module({
  imports: [TypeOrmModule.forFeature([CandleEntity]), OHLCVsModule],
  controllers: [CandlesController],
  providers: [CandlesService, CandlesRepository],
  exports: [CandlesRepository],
})
export class CandlesModule {}
