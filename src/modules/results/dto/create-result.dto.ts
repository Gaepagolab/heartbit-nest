export class CreateResultDto {
  static from(options: { currentStart: Date; currentEnd: Date; findStart?: Date; findEnd?: Date }): CreateResultDto {
    const it = new CreateResultDto();
    const { currentStart, currentEnd, findStart, findEnd } = options;

    it.currentStart = currentStart;
    it.currentEnd = currentEnd;
    it.findStart = findStart;
    it.findEnd = findEnd;

    return it;
  }

  currentStart: Date;
  currentEnd: Date;
  findStart?: Date;
  findEnd?: Date;
}
