// 1.通过cdn引入了jquery为$可以直接在代码中使用
// 2.声明命名空间$，不需要es的导入导出了
declare namespace $ {
  export function foo(): void
}
