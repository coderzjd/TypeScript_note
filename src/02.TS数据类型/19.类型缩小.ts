class Persion {
  eat() {}
}
type DirectionType = 'left' | 'right'
const p1 = new Persion()
function foo(arg: any) {
  if (typeof arg === 'string') {
    console.log(arg.length)
  }
  if (arg instanceof Persion) {
    arg.eat()
  }
}

function bar(b: DirectionType) {
  if (b === 'left') {
    // parameter b: "left"
    console.log(b)
  } else {
    // parameter b: "right"
    console.log(b)
  }
}

interface InFace {
  in: string
}
interface OutFace {
  out: string
}
function gkk(obj: InFace | OutFace) {
  if ('like' in obj) {
    console.log(obj)
  }
  // 类型“InFace | OutFace”上不存在属性“out”。
  // console.log(obj.out)
}

type roles = 'tester' | 'developer' | 'manager'
const staffCount: { [k in roles]: number } = {
  tester: 100,
  developer: 200,
  manager: 300,
}

export {}
