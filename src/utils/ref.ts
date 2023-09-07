export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    (ref as any).current = node;
  }
}

export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  const refArr = refs.filter(Boolean);
  if (refs.filter(Boolean).length <= 1) return refArr[0];
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}
