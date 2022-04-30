import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import FinanceEntity from './finance.entity';
import { FinancesController } from './finances.controller';
import { FinancesRepository } from './finances.repository';
import { FinancesService } from './finances.service';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceEntity])],
  controllers: [FinancesController],
  providers: [FinancesService, FinancesRepository],
})
export class FinancesModule {}
