import { useMemo } from 'react';
import { composeRef } from '@/utils/ref';
/**
 * 合并多个Ref,返回合并后的Ref
 * @param refs Ref参数数组
 * @returns 返回合并后的Ref
 */
export function useComposeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return useMemo(() => composeRef(...refs), [refs]);
}
