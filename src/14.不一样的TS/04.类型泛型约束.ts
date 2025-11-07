// 类型的泛型约束

// ===== 基础：自然数 → 元组长度 =====
type NumToTuple<N extends number, T extends unknown[] = []> =
    T['length'] extends N ? T : NumToTuple<N, [...T, unknown]>;

// ===== 加法：A + B =====
type Add<A extends number, B extends number> =
    [...NumToTuple<A>, ...NumToTuple<B>]['length'];

// ===== 反射 =====
type Keys<T> = keyof T;               // 对象 key 联合
type Values<T> = T[keyof T];            // 对象 value 联合

// ===== 泛型约束示例：只能传 number 字面量 =====
type Double<N extends number> = Add<N, N>;   // N * 2

// ===== 模板字面量：字符串拼接 =====
type Route<T extends string> = `/api/${T}`;
type User = Route<'user'>;               // "/api/user"

type A = Double<21>;   // 42
type B = User;         // "/api/user"
export {}