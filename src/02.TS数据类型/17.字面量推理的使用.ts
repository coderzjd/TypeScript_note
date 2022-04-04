type Method = 'GET' | 'POST'

function request(url: string, method: Method) {}
// 方案一
const obj = {
  url: '111',
  method: 'GET',
}
request(obj.url, obj.method as Method)
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
const objB = {
  url: '111',
  method: 'GET',
} as const
request(objB.url, objB.method)

export {}
