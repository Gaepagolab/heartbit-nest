import { Injectable } from '@nestjs/common';

import { Candle } from './candle.model';
import { CandlesRepository } from './candles.repository';
import { CreateCandleDto } from './dtos/create-candle.dto';

@Injectable()
export class CandlesService {
  constructor(private readonly candlesRepository: CandlesRepository) {}

  async create(createCandleDto: CreateCandleDto): Promise<Candle> {
    return await this.candlesRepository.create(createCandleDto);
  }

  async findByCoinId(coinId: number): Promise<Candle[]> {
    return await this.candlesRepository.findByCoinId(coinId);
  }
}
