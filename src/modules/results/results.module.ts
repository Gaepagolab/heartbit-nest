import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ResultEntity from './result.entity';
import { ResultsController } from './results.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResultEntity])],
  controllers: [ResultsController],
})
export class ResultsModule {}
