import { StatusCodeEnum } from "@/enums/http";
export function ok<T>(data: T, message: string = "ok") {
  return {
    code: StatusCodeEnum.SUCCESS,
    message,
    data,
  };
}
export function error(message: string = "error") {
  return {
    code: StatusCodeEnum.ERROR,
    message,
    data: null,
  };
}

export function getAccessToken(headers: Recordable) {
  return headers?.authorization;
}
