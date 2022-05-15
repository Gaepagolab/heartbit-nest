import { Injectable } from '@nestjs/common';
import { CreateFinanceDto } from './dtos/create-finance.dto';
import { FinanceFilterDto } from './dtos/finance.filter.dto';
import { Finance } from './finance.model';
import { FinancesRepository } from './finances.repository';

@Injectable()
export class FinancesService {
  constructor(private readonly financesRepository: FinancesRepository) {}

  async create(dto: CreateFinanceDto): Promise<Finance> {
    return await this.financesRepository.create(dto);
  }

  async findAll(dto: FinanceFilterDto): Promise<Finance[]> {
    return await this.financesRepository.findAllByFilter(dto);
  }
}
