import { Injectable } from '@nestjs/common';
import { CandlesRepository } from '../candles/candles.repository';

import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './result.model';
import { ResultsRepository } from './results.repository';

@Injectable()
export class ResultService {
  constructor(
    // line break
    private readonly resultsRepository: ResultsRepository,
    private readonly candlesRepository: CandlesRepository,
  ) {}

  async create(candleId: number, dto: CreateResultDto): Promise<Result> {
    const result = await this.resultsRepository.createEntity(dto);

    await this.candlesRepository.attachResult(candleId, result);

    return result.toModel();
  }
}
