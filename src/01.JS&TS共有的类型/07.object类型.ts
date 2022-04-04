// 会自动进行类型推断
const info = {
  name: 'zjd',
  age: 18,
  isShow: true,
}
// 实现一个接口
interface infoType {
  name: string
  age: number
  // 可选参数
  isShow?: boolean
}

const info2: infoType = {
  name: 'qq',
  age: 11,
  isShow: true,
}
const info3: infoType = {
  name: 'zz',
  age: 11,
}
console.log(info.age)
export {}
