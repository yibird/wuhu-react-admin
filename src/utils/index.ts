export * from './ref';
export * from './http';
export * from './string';

/**
 * 字符串驼峰命名法转换短横线命名法
 * @param str 转换字符串
 * @param separator 分隔符
 * @returns 返回转换后的字符串
 */
export function camelToKebab(str: string, separator: string = '-') {
  const temp = str.replace(/[A-Z]/g, (i) => `${separator}${i.toLowerCase()}`);
  return temp.slice(0, 1) === separator ? temp.slice(1) : temp;
}

/**
 * 短横线命名法转驼峰命名法
 * @param str 转换字符串
 * @param separator 分隔符
 * @returns 返回转换后的字符串
 */
export function kebabToCamel(str: string, separator: string = '-') {
  return str.replace(new RegExp(separator + '([a-z])', 'g'), (_, i) => i.toUpperCase());
}
