/**
 * List结构转Map结构
 * @param list 转换的list
 * @param keyMapper key映射函数
 * @param valueMapper value映射函数
 * @returns 转换的map
 */
export function toMap<T, K, V>(
  list: T[],
  keyMapper: (item: T, index: number) => K,
  valueMapper: (item: T, index: number) => V,
) {
  return list.reduce((acc, item, index) => {
    return acc.set(keyMapper(item, index) as K, valueMapper(item, index));
  }, new Map<K, V>());
}
