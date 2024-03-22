import { defHttp } from '@/utils';

export const userApis = {
  GET_USERS: 'GET /getUsers',
};

export function getUsersApi() {
  return defHttp.get<object>(userApis.GET_USERS);
}
