import { FinanceType } from './finance-type';

export interface IFinance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  title: string;
  type: FinanceType;
  content?: string;

  twitterUrl?: string;
  githubUrl?: string;
  discordUrl?: string;
  logoImageUrl?: string;

  isDeleted: boolean;
}
