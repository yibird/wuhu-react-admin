export const rawType = (val: unknown) => {
  return Object.prototype.toString.call(val).slice(8, -1);
};

export function isNumber(val: unknown): val is number {
  return rawType(val) === 'Number';
}

export function isString(val: unknown): val is string {
  return rawType(val) === 'String';
}

export function isBool(val: unknown): val is boolean {
  return rawType(val) === 'Boolean';
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNotNull(val: unknown) {
  return !isNull(val);
}

export function isSymbol(val: unknown): val is symbol {
  return rawType(val) === 'Symbol';
}

export function isBigint(val: bigint): val is bigint {
  return rawType(val) === 'Bigint';
}

export function isFunc(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isObject(val: unknown): val is object {
  return isNotNull(val) && rawType(val) === 'Object';
}

export function isDate(val: unknown): val is Date {
  return rawType(val) === 'Date';
}

export function isRegExp(val: unknown): val is RegExp {
  return rawType(val) === 'RegExp';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    rawType(val) === 'Promise' &&
    isNotNull(val) &&
    typeof val === 'object' &&
    isFunc((val as any).then) &&
    isFunc((val as any).catch)
  );
}

export function isMap<K = any, V = any>(val: unknown): val is Map<K, V> {
  return rawType(val) === 'Map';
}

export function isSet<T = any>(val: unknown): val is Set<T> {
  return rawType(val) === 'Set';
}

export function isWeakMap<K extends object = any, V = any>(val: unknown): val is WeakMap<K, V> {
  return rawType(val) === 'WeakMap';
}

export function isWeakSet<T extends object = any>(val: unknown): val is WeakSet<T> {
  return rawType(val) === 'WeakSet';
}

export function isWindow(val: unknown): val is Window {
  return isDef(window) && rawType(val) === 'Window';
}
export function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!(val as any).tagName;
}

export function isEmpty(val: unknown) {
  if (isArray(val) || isString(val)) return val.length === 0;
  if (isMap(val) || isSet(val)) return val.size === 0;
  if (isObject(val)) Object.keys(val).length === 0;
  return false;
}

export function isNullAndUndef(val: unknown) {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUndef(val: unknown) {
  return isUnDef(val) || isNull(val);
}
