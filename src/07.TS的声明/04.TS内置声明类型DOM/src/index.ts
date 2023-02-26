const divEl = document.createElement('div')
divEl.innerText = 'hellow Ts'
// 1.在tsconfig.json文件中的lib制定了引入的目标"DOM",所以可以使用dom相关Api及类型
document.body.appendChild(divEl)
