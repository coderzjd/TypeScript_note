type createArr<N extends number, E, Arr extends any[] = []> = Arr['length'] extends N
  ? Arr
  : createArr<N, E, [E, ...Arr]>

type a = createArr<4, '1'>

type ADD<N extends number, M extends number> = [...createArr<N, ''>, ...createArr<M, ''>]['length']

type t1 = 1
type t2 = 2

type res = ADD<t1,t2>
 
const r1 :res = 3
export {}
