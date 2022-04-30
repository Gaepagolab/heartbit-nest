export class UpdateOHLCVDto {
  static from(options: UpdateOHLCVDto) {
    const it = new UpdateOHLCVDto();

    if (options) {
      if (options.datetime !== undefined && options.datetime !== null) it.datetime = options.datetime;
      if (options.volume !== undefined && options.volume !== null) it.volume = options.volume;
      if (options.open !== undefined && options.open !== null) it.open = options.open;
      if (options.close !== undefined && options.close !== null) it.close = options.close;
      if (options.high !== undefined && options.high !== null) it.high = options.high;
      if (options.low !== undefined && options.low !== null) it.low = options.low;
    }

    return it;
  }

  datetime?: Date;
  volume?: number;
  open?: number;
  close?: number;
  high?: number;
  low?: number;
}
