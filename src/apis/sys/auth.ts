import { defHttp } from '@/utils';

export interface AccountLoginModel {
  account: string;
  password: string;
  captcha: string;
}

export const authApis = {
  LOGIN: 'POST /api/login',
  REGISTER: 'POST /Register',
};

export function doLoginApi(data: AccountLoginModel) {
  return defHttp.request({
    url: authApis.LOGIN,
    data,
  });
}

export function registerApi() {
  return defHttp.get<object>(authApis.REGISTER);
}
