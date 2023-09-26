import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { RequestOptions, Result } from '#/axios';

export interface AxiosRequestOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * 请求前hook
   * @param config axios请求配置对象
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;
  /**
   * 处理响应数据hook
   */
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;
  /**
   * 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;
  /**
   * 请求拦截器
   */
  requestInterceptors?: (
    config: InternalAxiosRequestConfig,
    options: AxiosRequestOptions,
  ) => InternalAxiosRequestConfig;
  /**
   * 请求拦截器错误处理
   */
  requestInterceptorsCatch?: (e: Error) => void;

  /**
   * 响应拦截器
   */
  responseInterceptors?: (response: AxiosResponse<any>) => AxiosResponse<any>;
  /**
   * 响应拦截器错误处理
   */
  responseInterceptorsCatch?: (axiosInstance: AxiosResponse, e: Error) => any;
}
