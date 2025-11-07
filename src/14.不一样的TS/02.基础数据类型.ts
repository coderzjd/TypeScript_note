// 原子
type A = 'hello';          // string 字面量
type B = 123;              // number 字面量
type C = true;             // boolean 字面量

// 复合
type D = [1, 2, 3];        // tuple（固定长度数组）
type E = { tag: 'ok' } | { tag: 'err' };  // union（枚举）
type F = { foo: 'ok' } & { bar: 'err' };  // 交叉类型（Intersection Type）

// 别名（类似 typedef）
type Result<T, E> = { _tag: 'Ok'; value: T } | { _tag: 'Err'; error: E };
export { }