export class CreateCoinDto {
  static from(option: { name: string }): CreateCoinDto {
    const it = new CreateCoinDto();
    const { name } = option;

    it.name = name;

    return it;
  }

  name: string;
}
