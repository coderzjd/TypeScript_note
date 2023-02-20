const msg: string = '11'
let flag: boolean
// !!将其他类型转化为Boolean类型,等价
flag = !!msg
flag = Boolean(msg)

function foo(id?: any): void {
  // 以下方法等价
  console.log(id ? id : '不存在')
  console.log(id ?? '不存在')
  console.log(id || '不存在')
  console.log('-------');
  
}
foo()
foo(false)
foo(null)
foo(undefined)

export {}
