/*****************************************************************
 *  0. 基础设施：自然数 ↔ 元组长度
 *****************************************************************/
type NumToTuple<N extends number, T extends unknown[] = []> =
    T['length'] extends N ? T : NumToTuple<N, [...T, unknown]>;

/*****************************************************************
 *  1. 减法  A − B  （仅支持 A ≥ B，否则 never）
 *****************************************************************/
type Sub<A extends number, B extends number> =
    NumToTuple<A> extends [...infer U, ...NumToTuple<B>] ? U['length'] : never;

/*****************************************************************
 *  2. 乘法  A × B
 *****************************************************************/
type Mul<A extends number, B extends number, R extends unknown[] = []> =
    B extends 0 ? R['length']
    : Mul<A, Sub<B, 1>, [...R, ...NumToTuple<A>]>;

/*****************************************************************
 *  3. 相等  Eq<A,B>  →  true | false
 *****************************************************************/
type Eq<A, B> = A extends B ? B extends A ? true : false : false;

/*****************************************************************
 *  4. 小于  Lt<A,B>  →  true | false  （A < B）
 *****************************************************************/
type Lt<A extends number, B extends number> =
    NumToTuple<A> extends [...infer _, ...NumToTuple<B>] ? true : false;

type T1 = Sub<7, 3>;   // 4
type T2 = Mul<3, 4>;   // 12
type T3 = Eq<5, 5>;    // true
type T4 = Lt<2, 9>;    // true
export type { NumToTuple, Sub, Mul, Eq, Lt };