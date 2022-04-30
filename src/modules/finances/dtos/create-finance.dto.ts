import { FinanceType } from '../types/finance-type';

export class CreateFinanceDto {
  static from(options: {
    title: string;
    type: FinanceType;

    content?: string;
    twitterUrl?: string;
    githubUrl?: string;
    discordUrl?: string;
    logoImageUrl?: string;
  }): CreateFinanceDto {
    const it = new CreateFinanceDto();

    it.title = options.title;
    it.type = options.type;

    if (options.hasOwnProperty('content')) it.content = options.content;
    if (options.hasOwnProperty('twitterUrl')) it.twitterUrl = options.twitterUrl;
    if (options.hasOwnProperty('githubUrl')) it.githubUrl = options.githubUrl;
    if (options.hasOwnProperty('discordUrl')) it.discordUrl = options.discordUrl;
    if (options.hasOwnProperty('logoImageUrl')) it.logoImageUrl = options.logoImageUrl;

    return it;
  }

  title: string;
  type: FinanceType;

  content?: string;
  twitterUrl?: string;
  githubUrl?: string;
  discordUrl?: string;
  logoImageUrl?: string;
}
