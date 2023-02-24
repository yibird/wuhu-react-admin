import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/role/getRoleList",
    statusCode: 200,
    method: "get",
    response: () => {
      return "error";
    },
  },
] as MockMethod[];
