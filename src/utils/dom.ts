import { CSSProperties } from 'react';
import { camelToKebab, kebabToCamel } from './index';

type ElementTarget = HTMLElement | Element | Document | Window;
type ElEventMap = HTMLElementEventMap & ElementEventMap & DocumentEventMap & WindowEventMap;

export function on<K extends keyof ElEventMap>(
  target: ElementTarget,
  eventName: K,
  handler: EventListenerOrEventListenerObject | Noop,
  options?: boolean | AddEventListenerOptions | undefined,
) {
  target.addEventListener(eventName, handler, options);
}

export function off<K extends keyof ElEventMap>(
  target: ElementTarget,
  eventName: K,
  handler: EventListenerOrEventListenerObject | Noop,
  options?: boolean | AddEventListenerOptions | undefined,
) {
  target.removeEventListener(eventName, handler, options);
}

export function styleToString(style: CSSProperties) {
  return Object.keys(style)
    .map((key) => `${camelToKebab(key)}:${(style as any)[key]};`)
    .join('');
}

export function getElementByClass(classNames: string, el: Document = document) {
  return el.getElementsByClassName(classNames)[0];
}
export function getElementsByClass(classNames: string, el: Document = document) {
  return el.getElementsByClassName(classNames);
}
