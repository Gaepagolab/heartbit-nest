import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import OHLCVEntity from './ohlcv.entity';
import { OHLCVsRepository } from './ohlcvs.repository';
import { OHLCVsService } from './ohlcvs.service';

@Module({
  imports: [TypeOrmModule.forFeature([OHLCVEntity])],
  providers: [OHLCVsService, OHLCVsRepository],
  exports: [OHLCVsService],
})
export class OHLCVsModule {}
