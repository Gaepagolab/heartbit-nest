export class CreateResultDto {
  static from(options: {
    candleId: number;
    accuracy: number;
    currentStart: string;
    currentEnd: string;
    findStart: string;
    findEnd: string;
  }): CreateResultDto {
    const it = new CreateResultDto();
    const { candleId, accuracy, currentStart, currentEnd, findStart, findEnd } = options;

    it.candleId = candleId;
    it.accuracy = accuracy;
    it.currentStart = currentStart;
    it.currentEnd = currentEnd;
    it.findStart = findStart;
    it.findEnd = findEnd;

    return it;
  }
  candleId: number;
  accuracy: number;
  currentStart: string;
  currentEnd: string;
  findStart: string;
  findEnd: string;
}
