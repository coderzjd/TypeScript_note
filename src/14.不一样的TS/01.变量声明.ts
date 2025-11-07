// 类型世界：type 变量名 = 字面量
type X = 42;               // 常量
type Y = X;                // 引用
type Z = Y extends 42 ? true : false;  // 读取并计算

export {}

// 所有“变量”都是 type 声明
// 不可变（再赋值会冲突）
// 作用域 = 文件/模块
