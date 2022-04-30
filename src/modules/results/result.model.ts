import { IModel } from '../../interfaces/model';
import { IResult } from './types/result';

export class Result implements IModel, IResult {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;
  public currentStart: Date;
  public currentEnd: Date;
  public findStart?: Date;
  public findEnd?: Date;

  constructor({ id, createdAt, updatedAt, currentStart, currentEnd, findStart, findEnd }: IResult) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.currentStart = currentStart;
    this.currentEnd = currentEnd;
    this.findStart = findStart;
    this.findEnd = findEnd;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      currentStart: this.currentStart,
      currentEnd: this.currentEnd,
      findStart: this.findStart,
      findEnd: this.findEnd,
    };
  }
}
