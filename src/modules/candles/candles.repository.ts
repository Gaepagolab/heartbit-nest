import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { CandleEntity } from './candle.entity';
import { Candle } from './candle.model';
import { CreateCandleDto } from './dtos/create-candle.dto';

@Injectable()
export class CandlesRepository extends BaseRepository<CandleEntity, Candle> {
  protected findOneRelations = ['ohlcvs'];

  constructor(
    @InjectRepository(CandleEntity)
    private candlesRepository: Repository<CandleEntity>,
  ) {
    super(candlesRepository);
  }

  async create(dto: CreateCandleDto): Promise<Candle> {
    const { coinId, type } = dto;
    const existingTypeCandle = await this.candlesRepository.findOne({
      where: { coinId, type },
    });
    if (existingTypeCandle) {
      throw new InternalServerErrorException(`${dto.type} has already exist in coin id ${dto.coinId}`);
    }
    const newCandle = this.entityRepository.create(dto);
    const saved = await this.entityRepository.save(newCandle);
    return saved.toModel();
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
