import { MenuEvent } from './enum';
import type { ActionOptions } from './types';

export class EventListener {
  callbacks: Record<string, any>;
  constructor() {
    this.callbacks = {};
    // 监听显示和隐藏按钮事件
    window.addEventListener(MenuEvent.SHOW, this.handleShowEvent.bind(this));
  }
  // 注册事件
  registerEvent(
    id: string,
    showCallback: (e: PointerEvent) => void,
    hideCallback: (e: Event) => void,
  ) {
    // 注册回调
    if (!Reflect.has(this.callbacks, id)) {
      this.callbacks[id] = {
        showCallback,
        hideCallback,
      };
    }
    return id;
  }
  handleShowEvent(e: Event) {
    const { id, event } = (e as CustomEvent).detail as ActionOptions;
    if (Reflect.has(this.callbacks, id)) {
      this.callbacks[id].showCallback(event);
    }
  }
}
