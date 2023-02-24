// import legacy from "@vitejs/plugin-legacy";
import unocssPlugin from "./unocss";
import mockPlugin from "./mock";
import react from "@vitejs/plugin-react";
import { PluginOption } from "vite";

export default function createPlugins(): PluginOption[] {
  return [unocssPlugin(), mockPlugin(), react()];
}
