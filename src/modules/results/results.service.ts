import { Injectable } from '@nestjs/common';

import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './result.model';
import { ResultsRepository } from './results.repository';

@Injectable()
export class ResultService {
  constructor(private readonly resultsRepository: ResultsRepository) {}

  private guardOfCreateBulkForBelongedSameCandle(dtos: CreateResultDto[]) {
    const firstCandleId = dtos.find((dto) => dto.candleId !== undefined)?.candleId;
    if (firstCandleId === undefined) {
      throw new Error('unimplemented for ResultService.createBulk for undefined candle.');
    }

    dtos.forEach((dto) => {
      if (dto.candleId !== firstCandleId) {
        throw new Error('unimplemented for ResultService.createBulk for belong in multiple candle.');
      }
    });

    return firstCandleId;
  }

  async createBulk(dtos: CreateResultDto[]): Promise<Result[]> {
    this.guardOfCreateBulkForBelongedSameCandle(dtos);
    return await this.resultsRepository.createBulk(dtos);
  }
}
