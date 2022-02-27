import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class CoinRequiredPropertiesSwagger {
  @ProtocolProperty({
    type: String,
    default: 'new coin',
  })
  name: string;
}
