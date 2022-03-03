import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { CandleEntity } from './candle.entity';
import { Candle } from './candle.model';

@Injectable()
export class CandlesRepository extends BaseRepository<CandleEntity, Candle> {
  constructor(
    @InjectRepository(CandleEntity)
    private candlesRepository: Repository<CandleEntity>,
  ) {
    super(candlesRepository);
  }

  async findByCoinId(coinId: number): Promise<Candle[]> {
    const results = await this.candlesRepository.find({
      where: { coinId },
      order: {
        id: 'ASC',
      },
    });

    return results.toModels();
  }
}
