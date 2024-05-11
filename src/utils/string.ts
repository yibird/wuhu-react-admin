/**
 *
 * 判断目标字符串是否以prefix开头,如果不是,则添加prefix前缀
 *
 * @param target 目标字符串
 * @param prefix 指定前缀
 * @param isPadding 是否填充
 * @returns
 */
export function addPrefix(target: string, prefix: string, isPadding: boolean = true) {
  return !target.startsWith(prefix) && isPadding ? prefix + target : target;
}

/**
 *
 * 判断目标字符串是否以suffix结尾,如果不是,则添加suffix后缀
 *
 * @param target 目标字符串
 * @param suffix 指定后缀
 * @param isPadding 是否填充
 * @returns
 */
export function addSuffix(target: string, suffix: string, isPadding: boolean = true) {
  return !target.endsWith(suffix) && isPadding ? target + suffix : target;
}
