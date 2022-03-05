import { Injectable } from '@nestjs/common';

import { Candle } from './candle.model';
import { CandlesRepository } from './candles.repository';
import { CreateCandleDto } from './dtos/create-candle.dto';

@Injectable()
export class CandlesService {
  constructor(private readonly candlesRepository: CandlesRepository) {}

  async create(dto: CreateCandleDto): Promise<Candle> {
    return await this.candlesRepository.create(dto);
  }

  async findByPk(id: number): Promise<Candle> {
    return await this.candlesRepository.findByPk(id);
  }

  async findByCoinId(coinId: number): Promise<Candle[]> {
    return await this.candlesRepository.findByCoinId(coinId);
  }
}
