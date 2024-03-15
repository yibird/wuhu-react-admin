import dynamicImport from 'vite-plugin-dynamic-import';

/**
 * 动态导入
 */
export default function dynamicImportPlugin() {
  return dynamicImport({
    filter: (id) => id.includes('/node_modules/'),
  });
}
