import { useEffect, useState } from "react";

export function useDynamicImportCss(path: string) {
  const [styles, setStyles] = useState<CSSModuleClasses>({});
  useEffect(() => {
    const importCss = async () => {
      const res = await import(path);
      res && setStyles(res.default);
    };
    importCss();
  }, []);
  return styles;
}
