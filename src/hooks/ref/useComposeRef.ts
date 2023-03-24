import { useMemo } from "react";
import { composeRef } from "@/utils/ref";
export function useComposeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return useMemo(() => composeRef(...refs), [refs]);
}
