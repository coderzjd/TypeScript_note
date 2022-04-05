// 方案一
const info: { name: string; age: number } = {
  name: 'jd',
  age: 18,
}
// 方案二
type infoType = { name: string; age?: number }
const info2: infoType = {
  name: '11',
  age: 19,
}
// 方案三
// 可以设置只读属性和可选
interface Iinfo {
  readonly name: string
  age?: number
}
const info3: Iinfo = {
  name: '11',
  age: 89,
}

export {}
