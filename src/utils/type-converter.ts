type Enum = { [key: string]: string | number };

export function enumToArray(arg: Enum): (string | number)[] {
  return Object.values(arg);
}
