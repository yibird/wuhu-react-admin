// import legacy from "@vitejs/plugin-legacy";
import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImportPlugin from './dynamicImport';
import unocssPlugin from './unocss';
import removeConsolePlugin from './removeConsole';
import cdnPlugin from './cdn';
import compressionPlugin from './compression';
import imageOptimizerPlugin from './imageOptimizer';
import mockPlugin from './mock';

export default function createPlugins(): PluginOption[] {
  return [
    dynamicImportPlugin(),
    unocssPlugin(),
    react(),
    removeConsolePlugin(),
    cdnPlugin(),
    compressionPlugin(),
    imageOptimizerPlugin(),
    mockPlugin(),
  ];
}
