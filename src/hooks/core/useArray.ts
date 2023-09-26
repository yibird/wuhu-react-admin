import { useState } from 'react';

/**
 * 用于简化数组操作,提供push()、remove()、replace()等方法
 * @param initalValue 数组的初始值
 * @returns
 */
export function useArray<T = any>(initalValue: Array<T>) {
  const [value, setValue] = useState(initalValue);
  function push(item: T) {}
  function remove(index: number) {}
  function replace(index: number, item: T) {}
  return { value, push, remove, replace };
}
