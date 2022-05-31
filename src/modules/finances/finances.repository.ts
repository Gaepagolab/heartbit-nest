import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { FinanceFilterDto } from './dtos/finance.filter.dto';
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

  async findAllByFilter(filter: FinanceFilterDto): Promise<Finance[]> {
    const result = await this.financessRepository.find({
      ...filter.toWhereLiteral(),
      order: { id: 'ASC' },
    });

    return result.toModels();
  }
}
