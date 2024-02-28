import removeConsole from 'vite-plugin-remove-console';

/**
 * 用于在生产环境中移除console语句
 */
export default function createremoveConsole() {
  return removeConsole({
    // 包含的console类型
    includes: ['log', 'warn', 'error', 'info'],
  });
}
