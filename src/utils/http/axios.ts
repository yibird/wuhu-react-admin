import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { isFunc } from '@/utils/is';
import { AxiosRequestOptions } from './axiosTransform';
import { RequestOptions, Result } from '#/axios';
import { cloneDeep } from 'lodash-es';
import { RequestMethodEnum } from '@/enums/http';
import { AxiosCanceler } from './axiosCanceler';

export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: AxiosRequestOptions;

  constructor(options: AxiosRequestOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  /**
   * 设置请求/响应拦截器
   */
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) return;

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform;

    const axiosCanceler = new AxiosCanceler();

    // 设置请求拦截器
    this.axiosInstance.interceptors.request.use((config) => {
      axiosCanceler.addPending(config);
      if (requestInterceptors && isFunc(requestInterceptors)) {
        config = requestInterceptors(config, this.options);
      }
      return config;
    }, undefined);

    // 设置请求拦截器异常处理
    if (requestInterceptorsCatch && isFunc(requestInterceptorsCatch)) {
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);
    }

    // 设置响应拦截器
    this.axiosInstance.interceptors.response.use((res) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunc(responseInterceptors)) {
        return responseInterceptors(res);
      }
      return res;
    }, undefined);

    // 设置响应拦截器异常处理
    if (responseInterceptorsCatch && isFunc(responseInterceptorsCatch)) {
      this.axiosInstance.interceptors.response.use(undefined, (error) => {
        // @ts-ignore
        responseInterceptorsCatch(this.axiosInstance, error);
      });
    }
  }
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    const transform = this.getTransform();
    const { beforeRequestHook, requestCatchHook, transformResponseHook } = transform || {};
    const conf: AxiosRequestConfig = cloneDeep(config);
    const opt: RequestOptions = Object.assign({}, options);

    // 执行请求前hook
    if (beforeRequestHook && isFunc(beforeRequestHook)) {
      Object.assign(conf, beforeRequestHook(config, opt));
    }

    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 设置响应转换hook
          if (transformResponseHook && isFunc(transformResponseHook)) {
            try {
              resolve(transformResponseHook(res, opt));
            } catch (err) {
              reject(err || new Error('request error!'));
            }
          }
        })
        .catch((e: Error | AxiosError) => {
          // 设置请求异常hook
          if (requestCatchHook && isFunc(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          // 处理axios内部错误
          if (axios.isAxiosError(e)) {
            console.log('err');
          }
          reject(e);
        });
    });
  }

  get<T = any>(
    url: string,
    data?: Recordable,
    conf?: AxiosRequestConfig,
    opt?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...conf, url, method: RequestMethodEnum.GET, data }, opt);
  }

  getRequest<T = any>(conf: AxiosRequestConfig, opt?: RequestOptions): Promise<T> {
    return this.request({ ...conf, method: RequestMethodEnum.GET }, opt);
  }
}
