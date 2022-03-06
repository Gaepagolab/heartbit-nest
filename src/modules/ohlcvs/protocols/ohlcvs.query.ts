import { PickType } from '@nestjs/swagger';
import { OHLCVRequiredPropertiesSwagger } from './ohlcv.required-properties.swagger';

export class OHLCVsQuery extends PickType(OHLCVRequiredPropertiesSwagger, ['candleId']) {}
