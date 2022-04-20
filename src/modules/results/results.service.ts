import { BadRequestException, Injectable } from '@nestjs/common';
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

  private async guardOfCandleShouldHaveResult(candleId: number) {
    const candle = await this.candlesRepository.findByPk(candleId);

    if (candle.result) {
      throw new BadRequestException(`Candle #${candle.id} has a result`);
    }
  }

  private async guardOfCandleShouldHaveNoResult(candleId: number) {
    const candle = await this.candlesRepository.findByPk(candleId);

    if (!candle.result) {
      throw new BadRequestException(`Candle #${candle.id} has no result`);
    }
  }

  async create(candleId: number, dto: CreateResultDto): Promise<Result> {
    await this.guardOfCandleShouldHaveResult(candleId);

    const result = await this.resultsRepository.createEntity(dto);

    await this.candlesRepository.attachResult(candleId, result);

    return result.toModel();
  }

  async update(candleId: number, dto: CreateResultDto): Promise<Result> {
    await this.guardOfCandleShouldHaveNoResult(candleId);

    const candle = await this.candlesRepository.findByPk(candleId);

    return await this.resultsRepository.update(candle.result.id, dto);
  }
}
