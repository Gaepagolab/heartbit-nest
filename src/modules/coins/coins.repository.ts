import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../database/base.repository';
import CoinEntity from './coin.entity';
import { Coin } from './coin.model';

@Injectable()
export class CoinsRepository extends BaseRepository<CoinEntity, Coin> {
  protected findOneRelations = ['candles'];

  constructor(
    @InjectRepository(CoinEntity)
    private coinsRepository: Repository<CoinEntity>,
  ) {
    super(coinsRepository);
  }

  async findByPk(id: number): Promise<Coin> {
    const coin = await this.coinsRepository.findOne(id, {
      relations: this.findOneRelations,
    });
    if (!coin) throw new NotFoundException('Coin not found');
    return coin.toModel();
  }
}
