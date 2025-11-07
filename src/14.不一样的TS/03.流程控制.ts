// if-else
type If<C, T, F> = C extends true ? T : F;

// for 循环：把计数器变成元组长度
type Loop<N, R extends unknown[] = []> =
    R['length'] extends N ? R : Loop<N, [...R, unknown]>;

// switch-case
type Op = '+' | '-';
type NegTable = {
    0: 0; 1: -1; 2: -2; 3: -3; 4: -4;   // … 按需补
};
type Calc<O extends Op, A extends number> =
    O extends '+' ? A :
    O extends '-' ? A extends keyof NegTable ? NegTable[A] : never :
    never;

export { }