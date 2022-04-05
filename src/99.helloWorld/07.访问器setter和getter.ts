class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  // 访问器setter和getter
  set name(newName) {
    this._name = newName
  }
  get name() {
    return this._name
  }
}
const p1 = new Person('11')
console.log(p1.name)
p1.name = '22'
console.log(p1.name)

export {}
