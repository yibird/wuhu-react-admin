import { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import createPlugins from './build/plugins';

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir);
const crateResolve = () => {
  return {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src') + '/',
      },
      {
        find: '#',
        replacement: pathResolve('types') + '/',
      },
    ],
  };
};

export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    resolve: crateResolve(),
    plugins: createPlugins(),
    server: {
      port: 5173,
    },
    esbuild: {
      target: 'ES2022',
    },
  };
};
