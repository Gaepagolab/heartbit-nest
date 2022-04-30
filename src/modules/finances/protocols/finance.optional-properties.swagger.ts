import { ProtocolProperty } from '../../../core/decorators/protocol-properties';

export class FinanceOptionalPropertiesSwagger {
  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  content?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  twitterUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  githubUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  discordUrl?: string;

  @ProtocolProperty({
    isOptional: true,
    type: String,
  })
  logoImageUrl?: string;
}
