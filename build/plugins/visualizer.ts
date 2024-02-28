import { PluginOption } from 'vite';
import visualizer from 'rollup-plugin-visualizer';
export function visualizerPlugin() {
  return visualizer({
    // 生成的图表的文件的名称
    filename: './node_modules/.cache/visualizer/stats.html',
    // 展示使用的图表类型,包括sunburst、treemap、network、raw-data、list
    template: 'treemap',
    // 否则在默认用户代理中打开生成的文件
    open: true,
    // 从源代码中收集 gzip 大小并将其显示在图表中
    gzipSize: true,
    // 从源代码中收集 brotli 大小并将其显示在图表中
    brotliSize: true,
  }) as PluginOption;
}
