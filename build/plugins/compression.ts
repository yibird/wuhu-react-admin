import { compression } from 'vite-plugin-compression2';
/**
 * 用于压缩bundle文件
 */
export default function compressionPlugin() {
  return compression({
    // 使用的压缩算法
    algorithm: 'gzip',
    // 排除符合任何条件的所有资源,这些资源都不会进行压缩
    exclude: [/\.(br)$/, /\.(gz)$/],
    // 是否删除原始资源,默认false
    deleteOriginalAssets: true,
    // 如果压缩结果大于或等于原始文件,是否跳过压缩,默认true
    skipIfLargerOrEqual: true,
  });
}
