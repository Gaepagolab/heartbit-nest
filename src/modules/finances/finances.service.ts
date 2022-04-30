import { Injectable } from '@nestjs/common';
import { FinancesRepository } from './finances.repository';

@Injectable()
export class FinancesService {
  constructor(private readonly financesRepository: FinancesRepository) {}
}
