import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ResultEntity from './result.entity';
import { ResultsController } from './results.controller';
import { ResultsRepository } from './results.repository';
import { ResultService } from './results.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  controllers: [ResultsController],
  providers: [ResultService, ResultsRepository],
})
export class ResultsModule {}
