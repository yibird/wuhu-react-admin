import { MenuEvent } from './enum';
import type { ActionOptions } from './types';

/**
 * 触发事件
 * @param eventName 事件名称
 * @param options 配置项
 * @param target 触发目标
 */
export function dispatchEvent(
  eventName: string,
  options: ActionOptions,
  target: HTMLElement | Window = window,
) {
  let event;
  // 判断 window.CustomEvent 兼容性
  if (typeof window.CustomEvent === 'function') {
    event = new window.CustomEvent(eventName, { detail: options });
  } else {
    event = document.createEvent('CustomEvent');
    // 初始化事件
    event.initCustomEvent(eventName, false, true, options);
  }

  if (target) {
    // 触发事件
    target.dispatchEvent(event);
  }
}

export function showMenu(option: ActionOptions, target?: HTMLElement) {
  dispatchEvent(MenuEvent.SHOW, option, target);
}
export function hideMenu(options: ActionOptions, target?: HTMLElement) {
  dispatchEvent(MenuEvent.HIDE, options, target);
}
