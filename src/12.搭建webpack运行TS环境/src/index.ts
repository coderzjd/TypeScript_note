const divEl: HTMLDivElement = document.createElement<'div'>('div')
const divEl2 = document.getElementById('aaa')
if (divEl2) {
  divEl2.style.width = '200px'
}
divEl.style.width = '200px'
divEl.style.height = '200px'
divEl.style.backgroundColor = 'pink'
function foo(a: number, b: number) {
  return a + b
}
console.log(foo(1, 2))
document.body.append(divEl)
