import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import { sysRole, sysUser } from './sys';

// const modules = import.meta.glob("./**/*.ts");
// const mockModules: any[] = [];

// Object.keys(modules).forEach((key) => {
//   if (key.includes("/_")) {
//     return;
//   }
//   mockModules.push(...(modules[key] as any).default);
// });
export function setupProdMockServer() {
  createProdMockServer([sysRole, sysUser]);
}
