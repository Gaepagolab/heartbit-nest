import { SelectQueryBuilder } from 'typeorm';
import '../array';

declare module 'typeorm' {
  interface SelectQueryBuilder<Entity> {
    apply<ARGUMENTS extends any[]>(
      fn: (builder: SelectQueryBuilder<Entity>, ...arguments: ARGUMENTS) => SelectQueryBuilder<Entity>,
      ...arguments: ARGUMENTS
    ): SelectQueryBuilder<Entity>;
  }
}

SelectQueryBuilder.prototype.apply = function <Entity, ARGUMENTS extends any[]>(
  fn: (builder: SelectQueryBuilder<Entity>, ...args: ARGUMENTS) => SelectQueryBuilder<Entity>,
  ...args: ARGUMENTS
): SelectQueryBuilder<Entity> {
  return fn(this, ...args);
};

function filter<T>(builder: SelectQueryBuilder<T>, [targetField, filterIds]: [string, number[]]): SelectQueryBuilder<T> {
  return builder.andWhere(`${targetField} IN (:...${targetField})`, { [targetField]: filterIds });
}

export function filterIfExists<T>(
  builder: SelectQueryBuilder<T>,
  targetField: string,
  filterIds: number[] | undefined,
): SelectQueryBuilder<T> {
  if (filterIds !== undefined && filterIds.exists()) {
    return filter(builder, [targetField, filterIds]);
  }

  return builder;
}
