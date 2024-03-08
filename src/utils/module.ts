export function getModuleDefault<T = any>(path: string): T;
export function getModuleDefault<T = any>(dir: string, filename: string, suffix?: string): T;

export async function getModuleDefault(...args: any[]) {
  if (args.length === 1) {
    const modules = await import(args[0]);
    return modules.default || {};
  }
  const modules = await import(args[0] + args[1] + args[2] || '');
  return modules.default || {};
}
