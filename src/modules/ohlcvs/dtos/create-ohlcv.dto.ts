export class CreateOHLCVDto {
  static from(options: {
    candleId: number;
    datetime: string;
    volume: number;
    open: number;
    close: number;
    high: number;
    low: number;
  }): CreateOHLCVDto {
    const it = new CreateOHLCVDto();
    const { candleId, datetime, volume, open, close, high, low } = options;

    it.candleId = candleId;
    it.datetime = datetime;
    it.volume = volume;
    it.open = open;
    it.close = close;
    it.high = high;
    it.low = low;

    return it;
  }

  candleId: number;
  datetime: string;
  volume: number;
  open: number;
  close: number;
  high: number;
  low: number;
}
