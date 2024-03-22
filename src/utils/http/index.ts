import type { RequestOptions, Result } from '#/axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { AxiosRequestOptions, AxiosTransform } from './axiosTransform';
import { VAxios } from './axios';
import { ContentTypeEnum, RequestMethodEnum } from '@/enums/http';
import { merge } from 'lodash-es';
import { AxiosRetry } from './axiosRetry';
import axios from 'axios';

const getToken = () => {
  return 'token';
};

const transform: AxiosTransform = {
  beforeRequestHook(conf, opt) {
    return conf;
  },
  transformResponseHook(res, opt) {
    return res;
  },
  requestCatchHook(e, options): Promise<any> {
    return new Promise(() => {});
  },
  requestInterceptors(conf, opt) {
    const token = getToken();
    // 判断请求是否需要token认证
    // if (token) {
    //   console.log('token:', token);
    // }
    return conf;
  },
  requestInterceptorsCatch(e: Error) {
    console.log('requestInterceptorsCatch...');
  },
  responseInterceptors(res: AxiosResponse<any>) {
    return res.data;
  },
  /**
   * 拦截器错误处理
   * @param axiosInstance Axios实例对象
   * @param e Error对象
   */
  responseInterceptorsCatch(axiosInstance: AxiosResponse, err: any) {
    // 如果请求被取消则直接返回Promise.reject()
    if (axios.isCancel(err)) {
      return Promise.reject(err);
    }
    const { response, code, message, config } = err || {};
    // 添加请求自动重试机制(仅处理GET请求)
    const retryRequest = new AxiosRetry();
    const { enable } = config.requestOptions.retryRequest;
    // 当请求方法为GET并且已开启请求重试时,请求失败会自动重试
    if (config.method?.toUpperCase() === RequestMethodEnum.GET && enable) {
      // @ts-ignore
      retryRequest.retry(axiosInstance, err);
    }
    return Promise.reject(err);
  },
};

const baseURL = import.meta.env.VITE_API_BASE_URL;
const defaultRequestOptions: AxiosRequestOptions = {
  timeout: 10000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  transform,
  baseURL,
  requestOptions: {
    ignoreCancelToken: true,
    withToken: true,
    retryRequest: {
      enable: true,
      count: 5,
      waitTime: 100,
    },
  },
};

function createAxios(opt?: Partial<AxiosRequestOptions>) {
  return new VAxios(merge(defaultRequestOptions, opt || {}));
}

export const defHttp = createAxios();
