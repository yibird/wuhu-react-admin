import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
/**
 * 使用 Sharp.js 优化image(png、jpeg、gif、tiff、webp、avif)
 */
export default function imageOptimizerPlugin() {
  return ViteImageOptimizer({
    // 处理的图片格式
    include: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    // png格式压缩配置,quality表示压缩质量
    png: {
      quality: 10,
    },
    // jpg格式压缩配置,quality表示压缩质量
    jpg: {
      quality: 10,
    },
    // jpeg格式压缩配置,quality表示压缩质量
    jpeg: {
      quality: 10,
    },
    // gif格式压缩配置
    gif: {},
    // webp格式压缩配置,lossless表示是否启用无损压缩
    webp: {
      lossless: true,
    },
    // avif格式压缩配置,lossless表示是否启用无损压缩
    avif: {
      lossless: true,
    },
    // 是否启用缓存,启用后从指定路径读取和写入带有哈希后缀的资产文件,默认false
    cache: true,
    // 缓存文件的位置
    cacheLocation: './node_modules/image-optimizer/',
  });
}
