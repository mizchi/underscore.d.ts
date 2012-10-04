interface underscore {
  //collections
  each(obj:any, f: Function): void;
  each(obj:any, f: Function, context:any): void;
  forEach(obj:any, f: Function): void;
  forEach(obj:any, f: Function, context:any): void;

  map(obj:any, f: Function): any[];
  map(obj:any, f: Function, context:any): any[];
  collect(obj:any, f: Function): any[];
  collect(obj:any, f: Function, context:any): any[];

  reduce(obj:any, f: Function, memo:any): any;
  reduce(obj:any, f: Function, memo:any, context:any): any;
  inject(obj:any, f: Function, memo:any): any;
  inject(obj:any, f: Function, memo:any, context:any): any;
  foldl(obj:any, f: Function, memo:any): any;
  foldl(obj:any, f: Function, memo:any, context:any): any;

  reduceRight(obj:any, f: Function, memo:any): any;
  reduceRight(obj:any, f: Function, memo:any, context:any): any;
  foldr(obj:any, f: Function, memo:any): any;
  foldr(obj:any, f: Function, memo:any, context:any): any;

  find(obj:any, f: Function): any;
  find(obj:any, f: Function, context:any): any;
  detect(obj:any, f: Function): any;
  detect(obj:any, f: Function, context:any): any;

  reject(obj:any, f: Function): any[];
  reject(obj:any, f: Function, context:any): any[];

  filter(obj:any, f: Function): any[];
  filter(obj:any, f: Function, context:any): any[];
  select(obj:any, f: Function): any[];
  select(obj:any, f: Function, context:any): any[];

  all(obj:any, f: Function): bool;
  all(obj:any, f: Function, context:any): bool;
  every(obj:any, f: Function): bool;
  every(obj:any, f: Function, context:any): bool;

  any(obj:any): bool;
  any(obj:any, f: Function): bool;
  any(obj:any, f: Function, context:any): bool;
  some(obj:any): bool;
  some(obj:any, f: Function): bool;
  some(obj:any, f: Function, context:any): bool;

  include(obj:any, f: Function): bool;
  contains(obj:any, f: Function): bool;

  invoke(obj:any, f: Function): any[];
  invoke(obj:any, f: Function, args:any[]): any[];

  pluck(obj:any, prop: string): any[];

  max(obj:number[]): number;
  max(obj:number[], context:any): number;

  min(obj:number[]): number;
  min(obj:number[], context:any): number;

  sortBy(obj:any, f: Function): any[];
  sortBy(obj:any, f: Function, context:any): any[];

  groupBy(obj:any, f: Function): any[];

  sortedIndex(obj:any, f: Function): any[];
  sortedIndex(obj:any, f: Function, iter:Function): any[];

  shuffle(obj:any[]): any[];
  toArray(obj:any[]): any[];
  size(obj:any[]): number;

  //array
  first(obj: any[]): any;
  head(obj: any[]): any;

  last(obj: any[]): any;

  rest(obj: any[]): any[];
  tail(obj: any[]): any[];

  compact(obj:any[]): any[];

  flatten(obj:any[]): any[];
  flatten(obj:any[], shallow:number): any[];

  without(obj:any[]): any[];
  intersection(...obj:any[]): any[];
  difference(...obj:any[]): any[];

  uniq(obj:any[]): any[];
  unique(obj:any[]): any[];

  zip(...obj:any[]): any[];
  indexOf(obj:any[], val:any): any;
  range(stop:number): number[];
  range(start:number, stop:number): number[];
  range(start:number, stop:number, step:number): number[];

  //object
  keys(obj:any): string[];
  values(obj:any): any[];
  functions(obj:any): string[];
  extend(obj:any, ...sources:any[]): any;
  pick(obj:any, ...keys:string[]): any;
  defaults(obj:any, ...defaults:any[]): any;
  clone(obj:any): any;
  tap(obj:any, intercepter:Function): any;
  has(obj:any, key:string): bool;

  //functions
  bind(f:Function, obj:Object):void;
  bind(f:Function, obj:Object, ...args:string[]):void;
  bindAll(obj:Object, ...methodNames:string[]):void;
  memoize(f:Function):any;
  memoize(f:Function, ...hashFunctions:any[]):any;

  delay(f:Function, wait:number):any;
  delay(f:Function, wait:number, ...arguments:any[]):any;
  defer(f:Function):any;
  defer(f:Function, ...arguments:any[]):any;
  throttle(f:Function, wait:number):any;
  debounce(f:Function, wait:number):any;
  debounce(f:Function, wait:number, ...immediate:any[]):any;
  once(f:Function):any;
  after(count:number, f:Function):any;
  wrap(f:Function, wrapper:Function):any;
  compose(...fs:Function[]):Function;

  //isX
  isEqual(obj:any, other:any): bool;
  isEmpty(obj:any): bool;
  isElement(obj:any): bool;
  isArray(obj:any): bool;
  isObject(obj:any): bool;
  isArguments(obj:any): bool;
  isFunction(obj:any): bool;
  isString(obj:any): bool;
  isNumber(obj:any): bool;
  isFinite(obj:any): bool;
  isBoolean(obj:any): bool;
  isDate(obj:any): bool;
  isRegExp(obj:any): bool;
  isNaN(obj:any): bool;
  isNull(obj:any): bool;
  isUndefined(obj:any): bool;

  //utility
  noConflict():bool;
  identity(x:any):any;
  times(n:number, f:Function):void;
  mixin(obj:any):void;
  uniqueId(prefix:string[]): string;
  escape(str:string): string;
  result(obj:any, key:string): any;
  template(template:string, bindings:any): string;

  //chaining
  chain(obj:any):any;
  //value is useless
}
