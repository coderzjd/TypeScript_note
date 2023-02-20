type Method = 'GET' | 'POST'

function request(url: string, method: Method) {}
// 方案一
const obj = {
  url: '111',
  method: 'GET',
}
// 类型“string”的参数不能赋给类型“Method”的参数。
// request(obj.url, obj.method)
request(obj.url, obj.method as Method)
request(obj.url, obj.method as 'GET')

// 方案二
type ReqParamsType = {
  url: string
  method: Method
}
const objA: ReqParamsType = {
  url: '111',
  method: 'GET',
}
request(objA.url, objA.method)
// 方案三,(字面量推理)
// as const 语法讲对象冻结为字面量类型
const objB = {
  url: '111',
  method: 'GET',
} as const
request(objB.url, objB.method)

export {}
