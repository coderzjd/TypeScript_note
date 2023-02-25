// 1.使用type关键字声明类型
// 告诉webpack及编译工具解析规则
import { type IName, getName } from './name'
const name: IName = {
  firstName: '张',
  lastName: '三',
}
console.log(getName(name))
