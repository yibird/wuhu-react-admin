import unocssPlugin from "./unocss";
import react from "@vitejs/plugin-react";

export default function createPlugins() {
  return [unocssPlugin(), react()];
}
