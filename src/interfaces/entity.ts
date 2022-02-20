import { ObjectLiteral } from 'typeorm';

export interface IEntity<M> extends ObjectLiteral {
  toModel(option?: Record<string, unknown>): M;
}
