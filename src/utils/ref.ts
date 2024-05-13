import React from 'react';

export function isRef<T>(target: unknown): target is React.RefObject<T> {
  return (
    typeof target === 'object' &&
    target !== null &&
    'current' in target &&
    target.current !== undefined
  );
}

/**
 * React.forwardRef() 简写方法,泛型T表示组件类型(component type)或元素类型(element type),
 * 泛型E表示props类型
 *
 * @param renderFunction 渲染函数
 * @returns React.forwardRef(renderFunction) 转发之后的组件
 */
export function withRef<T extends React.ComponentType<any> | keyof HTMLElementTagNameMap, E = {}>(
  renderFunction: React.ForwardRefRenderFunction<
    React.ElementRef<T>,
    E & Omit<React.ComponentPropsWithoutRef<T>, keyof E>
  >,
) {
  return React.forwardRef(renderFunction);
}

/**
 * 填充ref
 *
 * @param ref 需要填充ref
 * @param node 填充ref的值
 */
export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    (ref as any).current = node;
  }
}

/**
 * 组合多个ref
 *
 * @param refs ref数组
 * @returns 返回一个函数,该函数接收一个节点值,并将节点值填充到所有ref中
 */
export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  const refArr = refs.filter(Boolean);
  if (refArr.length <= 1) return refArr[0];
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}
