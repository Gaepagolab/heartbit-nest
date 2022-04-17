export class CreateResultDto {
  static from(options: {
    candleId: number;
    currentStart: string;
    currentEnd: string;
    findStart: string;
    findEnd: string;
  }): CreateResultDto {
    const it = new CreateResultDto();
    const { currentStart, currentEnd, findStart, findEnd } = options;

    it.currentStart = currentStart;
    it.currentEnd = currentEnd;
    it.findStart = findStart;
    it.findEnd = findEnd;

    return it;
  }
  candleId: number;
  currentStart: string;
  currentEnd: string;
  findStart: string;
  findEnd: string;
}
