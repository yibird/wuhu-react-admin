import type { LoadingProps } from './types';
import { createLoading } from './createLoading';

export interface UseLoadingOptions {
  target?: HTMLElement;
  props?: LoadingProps;
}

export function useLoading(props: LoadingProps): [Fn, Fn, (tip: string) => void];
export function useLoading(opt: UseLoadingOptions): [Fn, Fn, (tip: string) => void];

/**
 * loading Hooks
 * @param opt 配置项
 * @returns open、close、setTip三个函数
 */
export function useLoading(opt: LoadingProps | UseLoadingOptions): [Fn, Fn, (tip: string) => void] {
  let props: LoadingProps;
  let target: HTMLElement = document.body;
  if (Reflect.has(opt, 'target')) {
    const options = opt as UseLoadingOptions;
    props = options.props ?? {};
    target = options.target ?? document.body;
  } else {
    props = opt as LoadingProps;
  }
  const instance = createLoading(props!, target);

  function open() {
    if (!target) return;
    instance.open(target);
  }
  function close() {
    instance.close();
  }
  function setTip(tip: string) {
    instance.setTip(tip);
  }

  return [open, close, setTip];
}
