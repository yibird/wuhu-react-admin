import { useEffect, useRef } from "react";

/**
 * @param handle 执行函数
 * @param wait setTiemout执行等待时间
 * @param native 是否直接执行handle,默认false
 * @returns 返回一个对象,该对象包含readyRef、stop()、start()
 */
export const useTimeoutFn = (
  handle: Function,
  wait: number,
  native = false
) => {
  if (typeof handle != "function") throw new Error("handle is not Function!");
  const { readyRef, stop, start } = useTimeoutRef(wait);
  if (native) {
    handle();
  }
  useEffect(() => {
    !native && handle();
  }, [readyRef]);
  return { readyRef, stop, start };
};

/**
 * @description 根据等待时间执行setTimeout,返回readyRef、stop()、start()
 * @param wait 等待时间
 * @returns 返回一个对象,该对象包含readyRef、stop()、start(),参数说明如下:
 * - readyRef:一个ref对象,用于判断setTimeout是否处于运行状态。
 * - stop():停止setTimeout函数,调用Gai 函数后readyRef的值为false.
 * - start():启动setTimeout函数,启动后readyRef的值为true
 */
export const useTimeoutRef = (wait: number) => {
  const readyRef = useRef(false);
  let timer: TimeoutHandle;
  function stop() {
    readyRef.current = false;
    timer && window.clearTimeout(timer);
  }
  function start() {
    stop();
    timer = setTimeout(() => {
      readyRef.current = true;
    }, wait);
  }
  start();
  useEffect(() => () => stop(), []);
  return { readyRef, stop, start };
};
