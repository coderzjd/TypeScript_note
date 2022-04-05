class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const p1 = new Point<number>(1, 2, 3)
const res = p1.x
export {}
