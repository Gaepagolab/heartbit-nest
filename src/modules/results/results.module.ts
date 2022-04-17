import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandlesModule } from '../candles/candles.module';

import ResultEntity from './result.entity';
import { ResultsController } from './results.controller';
import { ResultsRepository } from './results.repository';
import { ResultService } from './results.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity]), CandlesModule],
  controllers: [ResultsController],
  providers: [ResultService, ResultsRepository],
})
export class ResultsModule {}
