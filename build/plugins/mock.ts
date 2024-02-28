import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

/**
 * 接口mock。详细请看:https://github.com/pengzhanbo/vite-plugin-mock-dev-server
 */
export default function mockPlugin() {
  return mockDevServerPlugin();
}
