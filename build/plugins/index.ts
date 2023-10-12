// import legacy from "@vitejs/plugin-legacy";
import unocssPlugin from './unocss';
import react from '@vitejs/plugin-react';
import mockPlugin from './mock';
import dynamicImportPlugin from './dynamicImport';
import { PluginOption } from 'vite';

export default function createPlugins(): PluginOption[] {
  return [dynamicImportPlugin(), unocssPlugin(), react()];
}
