import { CSSProperties } from "react";

export interface HighlightProps {
  // 全局高亮显示匹配字符串/正则表达式的联合
  queries?: string | RegExp | Array<string | RegExp>;
  // 匹配内容
  content?: string;
  // 是否区分大小写,默认false
  caseSensitive?: boolean;
  // 正在搜索的字符串是否对音调符号敏感
  diacriticsSensitive?: boolean;
  // 是否将整个字符串作为整个单词进行搜索,默认true
  wholeWordMatch?: boolean;
  // 高亮样式
  highlightStyle?: CSSProperties;
  // 高亮class
  highlightClass?: string;
  // 高亮包装标签,默认mark标签
  highlightTag?: string;
  /**
   * 匹配时触发的事件
   * @param str 匹配的字符串
   * @param count 出现字符串
   * @param offset 匹配字符串的偏移量
   */
  onMatch?: (str: string, count: number, offset: number) => void;
}
