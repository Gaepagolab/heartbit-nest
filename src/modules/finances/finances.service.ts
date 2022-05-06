import { Injectable } from '@nestjs/common';
import { CreateFinanceDto } from './dtos/create-finance.dto';
import { Finance } from './finance.model';
import { FinancesRepository } from './finances.repository';

@Injectable()
export class FinancesService {
  constructor(private readonly financesRepository: FinancesRepository) {}

  async create(dto: CreateFinanceDto): Promise<Finance> {
    return await this.financesRepository.create(dto);
  }

  async findAll(): Promise<Finance[]> {
    return await this.financesRepository.findAll();
  }

   async findByType(type: string): Promise<Finance[]> {
    return await this.financesRepository.findByType(type);
  }
}
