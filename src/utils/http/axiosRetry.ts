import { AxiosError, AxiosInstance } from 'axios';

/**
 * axios 请求重试机制
 */
export class AxiosRetry {
  retry(axiosInstance: AxiosInstance, error: AxiosError) {
    // @ts-ignore
    const { config } = error.response;
    // 每次重试请求重试+1
    config.__retryCount += 1;
    /**
     * 请求返回后config的header不正确造成重试请求失败,
     * 删除返回headers采用默认headers
     */
    delete config.headers;
    return this.delay(1000).then(() => axiosInstance(config));
  }

  /**
   * 延迟重试
   * @param waitTime 等待时间
   */
  private delay(waitTime: number) {
    return new Promise((resolve) => setTimeout(resolve, waitTime));
  }
}
