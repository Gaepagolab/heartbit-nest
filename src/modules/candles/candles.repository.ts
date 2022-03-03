import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { CandleEntity } from './candle.entity';
import { Candle } from './candle.model';

@Injectable()
export class CandlesRepository extends BaseRepository<CandleEntity, Candle> {
  protected findOneRelations = ['ohlcvs'];

  constructor(
    @InjectRepository(CandleEntity)
    private candlesRepository: Repository<CandleEntity>,
  ) {
    super(candlesRepository);
  }

  async findByPk(id: number): Promise<Candle> {
    const candle = await this.candlesRepository.findOne(id, {
      relations: this.findOneRelations,
    });
    if (!candle) throw new NotFoundException('Candle not found');
    return candle.toModel();
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
