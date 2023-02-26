// 1.全局声明模块，types目录随意
declare module 'lodash' {
  // 2.通过模块内部导出给lodash这个自定义模块加上了foo函数用以通过ts类型检测
  export function foo(): void
  export function join(...arg: any[]): any
}
