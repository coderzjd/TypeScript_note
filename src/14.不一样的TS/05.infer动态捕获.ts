// ===== 动态捕获：infer 现场拆解类型 =====
type Peek<T> = T extends (infer U)[] ? U :              // 数组元素
               T extends (...args: any[]) => infer R ? R : // 函数返回值
               T extends Promise<infer V> ? V :            // Promise 值
               T;                                          // 默认原样

type A = Peek<number[]>;      // number
type B = Peek<() => boolean>; // boolean

export {}