import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import { OHLCVFilterDto } from './dtos/ohlcv.filter.dto';
import OHLCVEntity from './ohlcv.entity';
import { OHLCV } from './ohlcv.model';

@Injectable()
export class OHLCVsRepository extends BaseRepository<OHLCVEntity, OHLCV> {
  constructor(
    @InjectRepository(OHLCVEntity)
    private ohlcvsRepository: Repository<OHLCVEntity>,
  ) {
    super(ohlcvsRepository);
  }

  async findByCandleId(candleId: number): Promise<OHLCV[]> {
    const results = await this.ohlcvsRepository.find({
      select: ['id', 'open', 'close', 'datetime', 'high', 'low', 'volume'],
      where: { candleId },
    });

    return results.toModels();
  }

  async getLatestByCandleId(candleId: number): Promise<OHLCV> {
    const entity = await this.ohlcvsRepository.findOne({
      where: { candleId },
      order: {
        datetime: 'DESC',
      },
    });

    if (!entity) throw new NotFoundException('Entity not found');

    return entity.toModel();
  }

  async findAllByFilter(filter: OHLCVFilterDto): Promise<OHLCV[]> {
    const result = await this.ohlcvsRepository.find({
      ...filter.toWhereLiteral(),
      order: { datetime: 'ASC' },
    });

    return result.toModels();
  }
}
