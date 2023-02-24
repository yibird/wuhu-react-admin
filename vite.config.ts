import { ConfigEnv, UserConfig } from "vite";
import { resolve } from "path";
import createPlugins from "./build/plugins";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
        {
          find: "#",
          replacement: pathResolve("types") + "/",
        },
      ],
    },
    plugins: createPlugins(),
    esbuild: {
      target: "ES2022",
    },
  };
};
