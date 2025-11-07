type Head<S extends string> =
  S extends `${infer H}${string}` ? H : never;

type Tail<S extends string> =
  S extends `${string}${infer T}` ? T : never;

type Reverse<S extends string,R extends string=''> =
  S extends '' ? R : Reverse<Tail<S>, `${Head<S>}${R}`>;

type A = Reverse<'hello'>;   // "olleh"

export {}