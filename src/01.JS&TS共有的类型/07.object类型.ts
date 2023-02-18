// 会自动进行类型推断
const info = {
  name: 'zjd',
  age: 18,
  isShow: true,
}
// 定义一个type
type infoType = {
  name: string
  age: number
  isShow: boolean
}
const info4: infoType = {
  name: 'xx',
  age: 18,
  isShow: true,
}
// 实现一个接口
interface infoInterFace {
  name: string
  age: number
  // 可选参数
  isShow?: boolean
}

const info2: infoInterFace = {
  name: 'qq',
  age: 11,
  isShow: true,
}
const info3: infoInterFace = {
  name: 'zz',
  age: 11,
}

console.log(info.age)
export {}
