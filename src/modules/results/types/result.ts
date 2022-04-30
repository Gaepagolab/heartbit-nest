export interface IResult {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  currentStart: Date;
  currentEnd: Date;
  findStart?: Date;
  findEnd?: Date;
}
