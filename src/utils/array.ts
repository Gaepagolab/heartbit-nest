import { IEntity } from '../interfaces/entity';
import { IModel } from '../interfaces/model';

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    filterNotNull(): NonNullable<T>[];

    exists(): boolean;

    toModels<Model extends IModel>(this: IEntity<Model>[]): Model[];
  }
  interface ArrayConstructor {
    build<T>(value: T | T[] | undefined): T[] | undefined;

    exists<T>(value: T | undefined): boolean;
  }
}

Array.prototype.filterNotNull = function <T>() {
  // NOTE: https://stackoverflow.com/a/66316669
  return this.filter((item: T) => item !== null) as NonNullable<T>[];
};

Array.prototype.exists = function () {
  return Array.isArray(this) && this.length > 0;
};

Array.prototype.toModels = function <Model extends IModel>(): Model[] {
  return (this as IEntity<Model>[]).map((value) => value.toModel());
};

Array.build = function <T>(value: T | T[] | undefined): T[] | undefined {
  if (Array.isArray(value)) {
    return value;
  } else {
    return value ? [value] : undefined;
  }
};

Array.exists = function <T>(value: T | undefined): boolean {
  return Array.isArray(value) && value.length > 0;
};
