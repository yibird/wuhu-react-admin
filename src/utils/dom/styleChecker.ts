/**
 * 用于检查当前代码是否运行在浏览器端或者是在服务器端
 */
export function canUseDom() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * 检查是否支持document对象
 */
export const canUseDocElement = () => canUseDom() && window.document.documentElement;

let flexGapSupported: boolean;
/**
 * 检测当前环境是否支持CSS gap属性
 */
export const detectFlexGapSupported = () => {
  // 不支持DOM环境则直接返回false
  if (!canUseDocElement()) {
    return false;
  }
  // 如果调用此函数后,则后续调用均不会执行gap属性检查逻辑,从而提升性能
  if (typeof flexGapSupported !== 'undefined') {
    return flexGapSupported;
  }
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  // 如果元素的scrollHeight为1表示支持gap属性
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
