/**
 * 简单实现的发布订阅模式
 */
export class Emitter {
  private callbacks: Record<string, Function[]>;
  constructor() {
    this.callbacks = {};
  }
  on(event: string, callback: Function) {
    if (Reflect.has(this.callbacks, event)) return;
    this.callbacks[event] = [...(this.callbacks[event] || []), callback];
  }
  off(event: string) {
    if (!Reflect.has(this.callbacks, event)) return;
    Reflect.deleteProperty(this.callbacks, event);
  }
  dispatch(event: string, options: object) {
    if (!Reflect.has(this.callbacks, event)) return;
    const callbackArr = this.callbacks[event];
    callbackArr.forEach((callback) => callback(options));
  }
}

export const emitter = new Emitter();
