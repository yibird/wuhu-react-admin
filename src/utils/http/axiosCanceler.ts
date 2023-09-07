import type { AxiosRequestConfig, Canceler } from 'axios';
import axios from 'axios';
import { isFunc } from '../is';

/**
 * 待处理请求容器,用于存储每个请求的标识和取消功能,
 * key为请求方法 + "&" + 请求url。
 * value为axios cannel取消函数。
 */
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (conf: AxiosRequestConfig) => {
  return [conf.method, conf.url].join('&');
};

export class AxiosCanceler {
  /**
   * 添加待处理请求
   * @param conf AxiosRequestConfig
   */
  addPending(conf: AxiosRequestConfig) {
    this.removePending(conf);
    const url = getPendingUrl(conf);
    conf.cancelToken =
      conf.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }
  /**
   * 移除待处理请求
   * @param conf AxiosRequestConfig
   */
  removePending(conf: AxiosRequestConfig) {
    const url = getPendingUrl(conf);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }
  /**
   * 清除容器中所有待处理请求
   */
  removeAllPending() {
    pendingMap.forEach((cannel) => {
      cannel && isFunc(cannel) && cannel();
    });
    pendingMap.clear();
  }
  /**
   * 重置待处理请求容器
   */
  reset() {
    pendingMap = new Map<string, Canceler>();
  }
}
