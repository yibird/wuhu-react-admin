import transformExternalCDN, { autoComplete } from 'vite-plugin-external-cdn';

/**
 * 用于将依赖项导入为 CDN 的 vite 插件,在构建时使用 rollup-plugin-external-globals 的插件将依赖项转换为 cdn
 */
export default function cdnPlugin() {
  return transformExternalCDN({
    modules: [autoComplete('react'), autoComplete('react-dom')],
  });
}
