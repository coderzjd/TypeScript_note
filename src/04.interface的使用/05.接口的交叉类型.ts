interface IName {
  name: string
}
interface IAge {
  age: number
}
const obj: IAge & IName = {
  name: '11',
  age: 19,
}

const obj1: IAge | IName = {
  name: '1',
}
export {}
