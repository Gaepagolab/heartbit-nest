import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import FinanceEntity from './finance.entity';
import { Finance } from './finance.model';

@Injectable()
export class FinancesRepository extends BaseRepository<FinanceEntity, Finance> {
  constructor(
    @InjectRepository(FinanceEntity)
    private financessRepository: Repository<FinanceEntity>,
  ) {
    super(financessRepository);
  }
}
