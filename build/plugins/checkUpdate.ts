import { webUpdateNotice } from '@plugin-web-update-notification/vite';

/**
 * 检查应用有更新并弹出通知
 * https://github.com/GreatAuk/plugin-web-update-notification/blob/master/README.zh-CN.md#vite
 */
export default function checkUpdate() {
  return webUpdateNotice({
    notificationProps: {
      title: '标题',
      description: 'System update, please refresh the page',
      buttonText: '刷新',
      dismissButtonText: '忽略',
    },
  });
}
