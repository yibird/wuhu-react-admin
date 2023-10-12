import dynamicImport from 'vite-plugin-dynamic-import';

export default function dynamicImportPlugin() {
  return dynamicImport({
    filter: (id) => id.includes('/node_modules/'),
  });
}
