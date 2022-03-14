export class UpdateOHLCVDto {
  static from(options: {
    datetime: string;
    volume: number;
    open: number;
    close: number;
    high: number;
    low: number;
  }): UpdateOHLCVDto {
    const it = new UpdateOHLCVDto();
    const { datetime, volume, open, close, high, low } = options;

    it.datetime = datetime;
    it.volume = volume;
    it.open = open;
    it.close = close;
    it.high = high;
    it.low = low;

    return it;
  }

  datetime: string;
  volume: number;
  open: number;
  close: number;
  high: number;
  low: number;
}
