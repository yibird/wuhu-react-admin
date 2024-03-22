import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

/**
 * 接口mock。详细请看:https://github.com/pengzhanbo/vite-plugin-mock-dev-server
 */
export default function mockPlugin() {
  return mockDevServerPlugin({
    // prefix: '^/api/',
    include: ['mock/**/*.mock.{ts,js,cjs,mjs,json,json5}'],
    build: {
      serverPort: 3000,
    },
  });
}
