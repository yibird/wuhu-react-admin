import type { PermissionState } from './types';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';

export const initialState: PermissionState = {
  clientMenus: [],
  serverMenus: menus,
  flatMenus: toList(menus),
};
