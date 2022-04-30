import { IModel } from '../../interfaces/model';
import { IFinance } from './types/finance';
import { FinanceType } from './types/finance-type';

export class Finance implements IModel, IFinance {
  public id: number;
  public createdAt: Date;
  public updatedAt: Date;

  public title: string;
  public type: FinanceType;
  public content?: string;
  public isDeleted: boolean;

  public twitterUrl?: string;
  public githubUrl?: string;
  public discordUrl?: string;
  public logoImageUrl?: string;

  constructor({
    id,
    createdAt,
    updatedAt,
    title,
    type,
    content,
    isDeleted,
    twitterUrl,
    githubUrl,
    discordUrl,
    logoImageUrl,
  }: IFinance) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.type = type;
    this.content = content;
    this.isDeleted = isDeleted;
    this.twitterUrl = twitterUrl;
    this.githubUrl = githubUrl;
    this.discordUrl = discordUrl;
    this.logoImageUrl = logoImageUrl;
  }

  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title,
      type: this.type,
      content: this.content,
      isDeleted: this.isDeleted,
      twitterUrl: this.twitterUrl,
      githubUrl: this.githubUrl,
      discordUrl: this.discordUrl,
      logoImageUrl: this.logoImageUrl,
    };
  }
}
