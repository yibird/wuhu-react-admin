type ElementTarget = HTMLElement | Element | Document | Window;
type ElEventMap = HTMLElementEventMap &
  ElementEventMap &
  DocumentEventMap &
  WindowEventMap;

export function on<K extends keyof ElEventMap>(
  target: ElementTarget,
  eventName: K,
  handler: EventListenerOrEventListenerObject | Noop,
  options?: boolean | AddEventListenerOptions | undefined
) {
  target.addEventListener(eventName, handler, options);
}

export function off<K extends keyof ElEventMap>(
  target: ElementTarget,
  eventName: K,
  handler: EventListenerOrEventListenerObject | Noop,
  options?: boolean | AddEventListenerOptions | undefined
) {
  target.removeEventListener(eventName, handler, options);
}
