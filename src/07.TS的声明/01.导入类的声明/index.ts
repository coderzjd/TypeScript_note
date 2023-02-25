// 1.使用type关键字声明类型
// 告诉webpack及编译工具解析规则
import { type IName, getName } from './name'
import type { IPerson, IPerson2 } from './person'
const name: IName = {
  firstName: '张',
  lastName: '三',
}
console.log(getName(name))

const p1: IPerson = {
  name: '李四',
  age: 18,
  firends: ['张三', '王五'],
}
const p2: IPerson2 = {
  name: '王五',
  age: 18,
  firends: [1, 2, 3],
}
