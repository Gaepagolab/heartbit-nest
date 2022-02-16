import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

import { IEntity } from '../interfaces/entity';
import { IModel } from '../interfaces/model';

export class BaseRepository<
  Entity extends IEntity<Model>,
  Model extends IModel,
> {
  protected entityRepository: Repository<Entity>;

  constructor(entityRepository: Repository<Entity>) {
    this.entityRepository = entityRepository;
  }

  async create(datum: DeepPartial<Entity>): Promise<Model> {
    // NOTE: `create` does not insert row(just creates instance)
    const newEntity = this.entityRepository.create(datum);
    const saved = await this.entityRepository.save(newEntity);
    return saved.toModel();
  }

  async createBulk(data: DeepPartial<Entity>[]): Promise<Model[]> {
    const newEntities = this.entityRepository.create(data);
    const saved = await this.entityRepository.save(newEntities);
    return saved.toModels();
  }

  async findAll(): Promise<Model[]> {
    const entities = await this.entityRepository.find();
    return entities.toModels();
  }

  async findByPk(id: number): Promise<Model> {
    const entity = await this.entityRepository.findOne(id);
    if (!entity) throw new NotFoundException('Entity not found');
    return entity.toModel();
  }

  async update(id: number, datum: DeepPartial<Entity>): Promise<Model> {
    await this.entityRepository.update(id, datum);
    const updatedEntity = await this.entityRepository.findOne(id);
    if (!updatedEntity) throw new NotFoundException('Entity not found');
    return updatedEntity.toModel();
  }

  async updateBulk(
    ids: number[],
    datum: DeepPartial<Entity>,
  ): Promise<Model[]> {
    await this.entityRepository.update(ids, datum);
    const updatedEntities = await this.entityRepository.findByIds(ids);
    if (!updatedEntities) throw new NotFoundException('Entity not found');
    return updatedEntities.toModels();
  }

  async delete(id: number): Promise<void> {
    const deleteResponse = await this.entityRepository.delete(id);
    if (deleteResponse.affected !== 1)
      throw new InternalServerErrorException('Entity not deleted');
  }
}
