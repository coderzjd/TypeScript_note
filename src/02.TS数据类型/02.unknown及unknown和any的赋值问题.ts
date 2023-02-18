// 在类型推断的时候默认为any类型，但是过于灵活
let msg: unknown
const flag: boolean = true
if (flag) {
  msg = 111
} else {
  msg = '111222222222222'
}
// unknown防止滥用，直接使用都是不合法的
// console.log(msg.length)
if (typeof msg === 'string') {
  // 类型缩小
  console.log(msg.length)
}
// unknown类型只能赋值给unknown或者any类型
let msgA: unknown
let msgB: any
let msgC: string

msgA = msg
msgB = msg
// msgC = msg

// any类型可以赋值给任意类型
let anyA: any
msgA = anyA
msgB = anyA
msgC = anyA
// unknown防止滥用
export {}
