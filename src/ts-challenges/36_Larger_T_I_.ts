export {}

type NumberToArray<T extends number, A extends string[] = []> = A['length'] extends T ? A : NumberToArray<T, [...A, '*']>

type LargerThan<A extends number, B extends number> =
  NumberToArray<A> extends [string, ...infer R1]
    ? NumberToArray<B> extends [string, ...infer R2]
      ? LargerThan<R1['length'], R2['length']> : true
    : false

type A = LargerThan<0, 1> // false
type B = LargerThan<1, 0> // true
type C = LargerThan<10, 9> // true
