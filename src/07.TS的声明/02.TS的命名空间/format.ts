// 1.单文件可以定义多个命名空间
// 2.每个命名空间需要被导出才能使用
// 3.每个命名空间内部变量被导出才能使用
export namespace formatPrice {
  export function format(price: number) {
    return '￥' + price
  }
  export const name = 'price'
}

export namespace formatDate {
  export function format(price: string) {
    return '2033-09-10'
  }
  const name = 'date'
}
