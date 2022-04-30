import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import FinanceEntity from './finance.entity';
import { FinancesController } from './finances.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceEntity])],
  controllers: [FinancesController],
  providers: [],
})
export class FinancesModule {}
