export {}

type FirstChar<T extends string> = T extends `${infer R}` ? R : never

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
