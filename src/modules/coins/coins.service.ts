import { Injectable } from '@nestjs/common';

import { Coin } from './coin.model';
import { CoinsRepository } from './coins.repository';
import { CreateCoinDto } from './dtos/create-coin.dto';

@Injectable()
export class CoinsService {
  constructor(private readonly coinsRepository: CoinsRepository) {}

  async create(createCoinDto: CreateCoinDto): Promise<Coin> {
    return await this.coinsRepository.create(createCoinDto);
  }

  async findAll(): Promise<Coin[]> {
    return await this.coinsRepository.findAll();
  }

  async findByPk(id: number): Promise<Coin> {
    return await this.coinsRepository.findByPk(id);
  }
}
