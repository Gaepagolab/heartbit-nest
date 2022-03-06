import { IModel } from '../../interfaces/model';
import { Candle } from '../candles/candle.model';
import { IResult } from './types/result';

export class Result implements IModel, IResult {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;
  public accuracy: number;
  public currentStart: string;
  public currentEnd: string;
  public findStart: string;
  public findEnd: string;
  public candleId: number;
  public candle?: Candle;

  constructor({ id, createdAt, updatedAt, accuracy, currentStart, currentEnd, findStart, findEnd, candleId, candle }: IResult) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.accuracy = accuracy;
    this.currentStart = currentStart;
    this.currentEnd = currentEnd;
    this.findStart = findStart;
    this.findEnd = findEnd;
    this.candleId = candleId;
    this.candle = candle;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      accuracy: this.accuracy,
      currentStart: this.currentStart,
      currentEnd: this.currentEnd,
      findStart: this.findStart,
      findEnd: this.findEnd,
      candleId: this.candleId,
      candle: this.candle,
    };
  }
}
