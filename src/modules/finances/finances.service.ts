import { Injectable } from '@nestjs/common';
import { Finance } from './finance.model';
import { FinancesRepository } from './finances.repository';

@Injectable()
export class FinancesService {
  constructor(private readonly financesRepository: FinancesRepository) {}

  async findAll(): Promise<Finance[]> {
    return await this.financesRepository.findAll();
  }
}
