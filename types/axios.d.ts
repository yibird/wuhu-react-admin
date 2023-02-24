export interface RetryRequest {
  // 是否启用请求重试
  enable: boolean;
  // 请求重试最大次数
  count: number;
  // 请求等待时间
  waitTime: number;
}

export interface RequestOptions {
  // 是否忽略重复请求
  ignoreCancelToken?: boolean;
  // 是否携带token
  withToken?: boolean;
  // 重试请求配置
  retryRequest?: RetryRequest;
}

export interface Result<T = any> {
  code: number;
  type: "success" | "error" | "warning";
  message: string;
  data: T;
}
