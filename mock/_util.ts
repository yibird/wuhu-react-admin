import { StatusCodeEnum } from '@/enums/http';

export function ok<T>(data: T, msg: string = 'success'): Res<T> {
  return {
    code: StatusCodeEnum.SUCCESS,
    msg,
    data,
  };
}
export function err(msg: string = 'error'): Res<null> {
  return {
    code: StatusCodeEnum.ERROR,
    msg,
    data: null,
  };
}

export function getAccessToken(headers: Recordable) {
  return headers?.authorization;
}
