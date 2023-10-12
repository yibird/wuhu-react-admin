import { viteMockServe } from 'vite-plugin-mock';

export default function mockPlugin() {
  return viteMockServe({
    mockPath: 'mock',
    // localEnabled: true,
  });
}
