
/* 1. 映射类型（结构化循环） */
type Map1<T> = { [K in keyof T]: T[K] };               // 读 + 写
type Map2<T> = { [K in keyof T as `${K}Id`]: T[K] };   // as 重命名
type Map3<T> = { +readonly [K in keyof T]: T[K] };     // +/- 修饰符
type Map4<T> = { [K in keyof T]?: T[K] };

/* 2. 条件类型（分支 + 模式匹配） */
type Branch1<T> = T extends true ? 1 : 0;              // extends 判断
type Branch2<T> = T extends infer R ? R : never;       // infer 占位
type Branch3<T> = [T] extends [true] ? 1 : 0;          // 关闭分发
type Branch4<T> = T extends (infer I)[] ? I : never;   // infer 深度解构

/* 3. 分发行为（distributive 语义） */
type Dist1<T> = T extends any ? T : never;             // T 被拆成联合
type Dist2<T> = [T] extends [any] ? T : never;         // 用 [] 关分发

/* 4. keyof / typeof / in（反射三件套） */
type Keys<O> = keyof O;                                // 键联合
type Values<O> = O[keyof O];                           // 值联合
type Entries<O> = { [K in keyof O]: [K, O[K]] }[keyof O];

/* 5. 可变元组（TS 4.0+ 原生指令） */
type Conc<A extends unknown[], B extends unknown[]> = [...A, ...B];
type DropFirst<T extends unknown[]> = T extends [any, ...infer R] ? R : [];

/* 6. 模板字面量类型（字符串层面正则） */
type Prefixed<S extends string> = `pre_${S}`;
type ExtractNum<S extends string> =
    S extends `${string}_${infer N extends number}` ? N : never;

export { };