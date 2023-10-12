// mock/_createProductionServer.bundled_ad3quzhnb9.mjs
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
function ok(data, message = "ok") {
  return {
    code: 200,
    message,
    data
  };
}
function error(message = "error") {
  return {
    code: 500,
    message,
    data: null
  };
}
function getAccessToken(headers) {
  return headers?.authorization;
}
function mockUserList() {
  return [
    {
      userId: 1,
      username: "2684837849",
      password: "123456",
      nickname: "zchengfeng",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      token: "fakeToken1"
    },
    {
      userId: 2,
      username: "admin",
      password: "123456",
      nickname: "wuhu",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      token: "fakeToken2"
    }
  ];
}
var user_default = [
  {
    url: "/auth/doLogin",
    timeout: 200,
    method: "post",
    response: ({ body }) => {
      const { username, password } = body;
      const user = mockUserList().find((item) => {
        return item.username === username && item.password === password;
      });
      return user ? ok({ access_token: user.token }) : error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF");
    }
  },
  {
    url: "/auth/logout",
    timeout: 200,
    method: "get",
    response: ({ headers }) => {
      const accessToken = getAccessToken(headers);
      const user = mockUserList().find((item) => item.token === accessToken);
      return user ? ok(null, "Token has been destroyed") : error("Invalid token!");
    }
  },
  {
    url: "/user/getRoleList",
    method: "get",
    response: () => {
      return "error";
    }
  }
];
var role_default = [
  {
    url: "/role/getRoleList",
    statusCode: 200,
    method: "get",
    response: () => {
      return "error";
    }
  }
];
function setupProdMockServer() {
  createProdMockServer([role_default, user_default]);
}
export {
  setupProdMockServer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL19jcmVhdGVQcm9kdWN0aW9uU2VydmVyLnRzIiwgIm1vY2svbW9jay9fdXRpbC50cyIsICJtb2NrL21vY2svc3lzL3VzZXIudHMiLCAibW9jay9tb2NrL3N5cy9yb2xlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGFwcFxcXFxwcm9qZWN0XFxcXHdlYlxcXFx3dWh1LXJlYWN0LWFkbWluXFxcXG1vY2tcXFxcX2NyZWF0ZVByb2R1Y3Rpb25TZXJ2ZXIudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovYXBwL3Byb2plY3Qvd2ViL3d1aHUtcmVhY3QtYWRtaW4vbW9jay9fY3JlYXRlUHJvZHVjdGlvblNlcnZlci50c1wiO2ltcG9ydCB7IGNyZWF0ZVByb2RNb2NrU2VydmVyIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jay9lcy9jcmVhdGVQcm9kTW9ja1NlcnZlcic7XHJcbmltcG9ydCB7IHN5c1JvbGUsIHN5c1VzZXIgfSBmcm9tICcuL3N5cyc7XHJcblxyXG4vLyBjb25zdCBtb2R1bGVzID0gaW1wb3J0Lm1ldGEuZ2xvYihcIi4vKiovKi50c1wiKTtcclxuLy8gY29uc3QgbW9ja01vZHVsZXM6IGFueVtdID0gW107XHJcblxyXG4vLyBPYmplY3Qua2V5cyhtb2R1bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuLy8gICBpZiAoa2V5LmluY2x1ZGVzKFwiL19cIikpIHtcclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9XHJcbi8vICAgbW9ja01vZHVsZXMucHVzaCguLi4obW9kdWxlc1trZXldIGFzIGFueSkuZGVmYXVsdCk7XHJcbi8vIH0pO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBQcm9kTW9ja1NlcnZlcigpIHtcclxuICBjcmVhdGVQcm9kTW9ja1NlcnZlcihbc3lzUm9sZSwgc3lzVXNlcl0pO1xyXG59XHJcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGFwcFxcXFxwcm9qZWN0XFxcXHdlYlxcXFx3dWh1LXJlYWN0LWFkbWluXFxcXG1vY2tcXFxcX3V0aWwudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovYXBwL3Byb2plY3Qvd2ViL3d1aHUtcmVhY3QtYWRtaW4vbW9jay9fdXRpbC50c1wiO2ltcG9ydCB7IFN0YXR1c0NvZGVFbnVtIH0gZnJvbSAnQC9lbnVtcy9odHRwJztcclxuZXhwb3J0IGZ1bmN0aW9uIG9rPFQ+KGRhdGE6IFQsIG1lc3NhZ2U6IHN0cmluZyA9ICdvaycpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTogU3RhdHVzQ29kZUVudW0uU1VDQ0VTUyxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2U6IHN0cmluZyA9ICdlcnJvcicpIHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTogU3RhdHVzQ29kZUVudW0uRVJST1IsXHJcbiAgICBtZXNzYWdlLFxyXG4gICAgZGF0YTogbnVsbCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZXNzVG9rZW4oaGVhZGVyczogUmVjb3JkYWJsZSkge1xyXG4gIHJldHVybiBoZWFkZXJzPy5hdXRob3JpemF0aW9uO1xyXG59XHJcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXGFwcFxcXFxwcm9qZWN0XFxcXHdlYlxcXFx3dWh1LXJlYWN0LWFkbWluXFxcXG1vY2tcXFxcc3lzXFxcXHVzZXIudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1xcXFxzeXNcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L2FwcC9wcm9qZWN0L3dlYi93dWh1LXJlYWN0LWFkbWluL21vY2svc3lzL3VzZXIudHNcIjtpbXBvcnQgeyBNb2NrTWV0aG9kIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jayc7XHJcbmltcG9ydCB7IGVycm9yLCBnZXRBY2Nlc3NUb2tlbiwgb2sgfSBmcm9tICcuLi9fdXRpbCc7XHJcblxyXG5mdW5jdGlvbiBtb2NrVXNlckxpc3QoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgdXNlcklkOiAxLFxyXG4gICAgICB1c2VybmFtZTogJzI2ODQ4Mzc4NDknLFxyXG4gICAgICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgICAgIG5pY2tuYW1lOiAnemNoZW5nZmVuZycsXHJcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LRHBndmd1TXBHZnFhSFBqaWNSSy5zdmcnLFxyXG4gICAgICB0b2tlbjogJ2Zha2VUb2tlbjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXNlcklkOiAyLFxyXG4gICAgICB1c2VybmFtZTogJ2FkbWluJyxcclxuICAgICAgcGFzc3dvcmQ6ICcxMjM0NTYnLFxyXG4gICAgICBuaWNrbmFtZTogJ3d1aHUnLFxyXG4gICAgICBhdmF0YXI6ICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvS0RwZ3ZndU1wR2ZxYUhQamljUksuc3ZnJyxcclxuICAgICAgdG9rZW46ICdmYWtlVG9rZW4yJyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHVybDogJy9hdXRoL2RvTG9naW4nLFxyXG4gICAgdGltZW91dDogMjAwLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBib2R5O1xyXG4gICAgICBjb25zdCB1c2VyID0gbW9ja1VzZXJMaXN0KCkuZmluZCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBpdGVtLnBhc3N3b3JkID09PSBwYXNzd29yZDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB1c2VyID8gb2soeyBhY2Nlc3NfdG9rZW46IHVzZXIudG9rZW4gfSkgOiBlcnJvcignXHU3NTI4XHU2MjM3XHU1NDBEXHU2MjE2XHU1QkM2XHU3ODAxXHU5NTE5XHU4QkVGJyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiAnL2F1dGgvbG9nb3V0JyxcclxuICAgIHRpbWVvdXQ6IDIwMCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICByZXNwb25zZTogKHsgaGVhZGVycyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2V0QWNjZXNzVG9rZW4oaGVhZGVycyk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBtb2NrVXNlckxpc3QoKS5maW5kKChpdGVtKSA9PiBpdGVtLnRva2VuID09PSBhY2Nlc3NUb2tlbik7XHJcbiAgICAgIHJldHVybiB1c2VyID8gb2sobnVsbCwgJ1Rva2VuIGhhcyBiZWVuIGRlc3Ryb3llZCcpIDogZXJyb3IoJ0ludmFsaWQgdG9rZW4hJyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiAnL3VzZXIvZ2V0Um9sZUxpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAnZXJyb3InO1xyXG4gICAgfSxcclxuICB9LFxyXG5dIGFzIE1vY2tNZXRob2RbXTtcclxuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1xcXFxzeXNcXFxccm9sZS50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxhcHBcXFxccHJvamVjdFxcXFx3ZWJcXFxcd3VodS1yZWFjdC1hZG1pblxcXFxtb2NrXFxcXHN5c1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovYXBwL3Byb2plY3Qvd2ViL3d1aHUtcmVhY3QtYWRtaW4vbW9jay9zeXMvcm9sZS50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICB1cmw6ICcvcm9sZS9nZXRSb2xlTGlzdCcsXHJcbiAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbl0gYXMgTW9ja01ldGhvZFtdO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsNEJBQTRCO0FDQ3hVLFNBQVMsR0FBTSxNQUFTLFVBQWtCLE1BQU07QUFDckQsU0FBTztJQUNMLE1BQUE7SUFDQTtJQUNBO0VBQ0Y7QUFDRjtBQUNPLFNBQVMsTUFBTSxVQUFrQixTQUFTO0FBQy9DLFNBQU87SUFDTCxNQUFBO0lBQ0E7SUFDQSxNQUFNO0VBQ1I7QUFDRjtBQUVPLFNBQVMsZUFBZSxTQUFxQjtBQUNsRCxTQUFPLFNBQVM7QUFDbEI7QUNmQSxTQUFTLGVBQWU7QUFDdEIsU0FBTztJQUNMO01BQ0UsUUFBUTtNQUNSLFVBQVU7TUFDVixVQUFVO01BQ1YsVUFBVTtNQUNWLFFBQVE7TUFDUixPQUFPO0lBQ1Q7SUFDQTtNQUNFLFFBQVE7TUFDUixVQUFVO01BQ1YsVUFBVTtNQUNWLFVBQVU7TUFDVixRQUFRO01BQ1IsT0FBTztJQUNUO0VBQ0Y7QUFDRjtBQUVBLElBQU8sZUFBUTtFQUNiO0lBQ0UsS0FBSztJQUNMLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3RCLFlBQU0sRUFBRSxVQUFVLFNBQVMsSUFBSTtBQUMvQixZQUFNLE9BQU8sYUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTO0FBQ3pDLGVBQU8sS0FBSyxhQUFhLFlBQVksS0FBSyxhQUFhO01BQ3pELENBQUM7QUFDRCxhQUFPLE9BQU8sR0FBRyxFQUFFLGNBQWMsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLGtEQUFVO0lBQ25FO0VBQ0Y7RUFDQTtJQUNFLEtBQUs7SUFDTCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVUsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUN6QixZQUFNLGNBQWMsZUFBZSxPQUFPO0FBQzFDLFlBQU0sT0FBTyxhQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLFdBQVc7QUFDckUsYUFBTyxPQUFPLEdBQUcsTUFBTSwwQkFBMEIsSUFBSSxNQUFNLGdCQUFnQjtJQUM3RTtFQUNGO0VBQ0E7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87SUFDVDtFQUNGO0FBQ0Y7QUNwREEsSUFBTyxlQUFRO0VBQ2I7SUFDRSxLQUFLO0lBQ0wsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPO0lBQ1Q7RUFDRjtBQUNGO0FIQ08sU0FBUyxzQkFBc0I7QUFDcEMsdUJBQXFCLENBQUMsY0FBUyxZQUFPLENBQUM7QUFDekM7IiwKICAibmFtZXMiOiBbXQp9Cg==
