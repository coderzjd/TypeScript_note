function logMsg(msg?: string): void {
  // 此时编译不报错，但是不严谨
  // 非空类型断言，msg必定有值
  // console.log(msg!.length)

  // JS可选链，相对严谨
  // 不存在直接返回undefined
  console.log(msg?.length)
}
logMsg()
logMsg('22')
export {}
