import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import dynamicImportPlugin from './dynamicImport';
import unocssPlugin from './unocss';
import removeConsolePlugin from './removeConsole';
import cdnPlugin from './cdn';
import compressionPlugin from './compression';
import imageOptimizerPlugin from './imageOptimizer';
import mockPlugin from './mock';
import checkUpdatePlugin from './checkUpdate';

export default function createPlugins(): PluginOption[] {
  return [
    dynamicImportPlugin(),
    // tailwindCSSPlugin(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    react(),
    unocssPlugin(),
    removeConsolePlugin(),
    cdnPlugin(),
    compressionPlugin(),
    imageOptimizerPlugin(),
    mockPlugin(),
    // checkUpdatePlugin(),
  ];
}
