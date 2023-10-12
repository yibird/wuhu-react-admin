// mock/_util.ts
function ok(data, message = "ok") {
  return {
    code: 200 /* SUCCESS */,
    message,
    data
  };
}
function error(message = "error") {
  return {
    code: 500 /* ERROR */,
    message,
    data: null
  };
}
function getAccessToken(headers) {
  return headers?.authorization;
}

// mock/sys/user.ts
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

// mock/sys/role.ts
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
export {
  role_default as sysRole,
  user_default as sysUser
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9fdXRpbC50cyIsICJtb2NrL3N5cy91c2VyLnRzIiwgIm1vY2svc3lzL3JvbGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1xcXFxfdXRpbC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxhcHBcXFxccHJvamVjdFxcXFx3ZWJcXFxcd3VodS1yZWFjdC1hZG1pblxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9hcHAvcHJvamVjdC93ZWIvd3VodS1yZWFjdC1hZG1pbi9tb2NrL191dGlsLnRzXCI7aW1wb3J0IHsgU3RhdHVzQ29kZUVudW0gfSBmcm9tICdAL2VudW1zL2h0dHAnO1xyXG5leHBvcnQgZnVuY3Rpb24gb2s8VD4oZGF0YTogVCwgbWVzc2FnZTogc3RyaW5nID0gJ29rJykge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiBTdGF0dXNDb2RlRW51bS5TVUNDRVNTLFxyXG4gICAgbWVzc2FnZSxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZTogc3RyaW5nID0gJ2Vycm9yJykge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiBTdGF0dXNDb2RlRW51bS5FUlJPUixcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBkYXRhOiBudWxsLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbihoZWFkZXJzOiBSZWNvcmRhYmxlKSB7XHJcbiAgcmV0dXJuIGhlYWRlcnM/LmF1dGhvcml6YXRpb247XHJcbn1cclxuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcYXBwXFxcXHByb2plY3RcXFxcd2ViXFxcXHd1aHUtcmVhY3QtYWRtaW5cXFxcbW9ja1xcXFxzeXNcXFxcdXNlci50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxhcHBcXFxccHJvamVjdFxcXFx3ZWJcXFxcd3VodS1yZWFjdC1hZG1pblxcXFxtb2NrXFxcXHN5c1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovYXBwL3Byb2plY3Qvd2ViL3d1aHUtcmVhY3QtYWRtaW4vbW9jay9zeXMvdXNlci50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcclxuaW1wb3J0IHsgZXJyb3IsIGdldEFjY2Vzc1Rva2VuLCBvayB9IGZyb20gJy4uL191dGlsJztcclxuXHJcbmZ1bmN0aW9uIG1vY2tVc2VyTGlzdCgpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICB1c2VySWQ6IDEsXHJcbiAgICAgIHVzZXJuYW1lOiAnMjY4NDgzNzg0OScsXHJcbiAgICAgIHBhc3N3b3JkOiAnMTIzNDU2JyxcclxuICAgICAgbmlja25hbWU6ICd6Y2hlbmdmZW5nJyxcclxuICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL0tEcGd2Z3VNcEdmcWFIUGppY1JLLnN2ZycsXHJcbiAgICAgIHRva2VuOiAnZmFrZVRva2VuMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1c2VySWQ6IDIsXHJcbiAgICAgIHVzZXJuYW1lOiAnYWRtaW4nLFxyXG4gICAgICBwYXNzd29yZDogJzEyMzQ1NicsXHJcbiAgICAgIG5pY2tuYW1lOiAnd3VodScsXHJcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9LRHBndmd1TXBHZnFhSFBqaWNSSy5zdmcnLFxyXG4gICAgICB0b2tlbjogJ2Zha2VUb2tlbjInLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdXJsOiAnL2F1dGgvZG9Mb2dpbicsXHJcbiAgICB0aW1lb3V0OiAyMDAsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcclxuICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGJvZHk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBtb2NrVXNlckxpc3QoKS5maW5kKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIGl0ZW0ucGFzc3dvcmQgPT09IHBhc3N3b3JkO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHVzZXIgPyBvayh7IGFjY2Vzc190b2tlbjogdXNlci50b2tlbiB9KSA6IGVycm9yKCdcdTc1MjhcdTYyMzdcdTU0MERcdTYyMTZcdTVCQzZcdTc4MDFcdTk1MTlcdThCRUYnKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB1cmw6ICcvYXV0aC9sb2dvdXQnLFxyXG4gICAgdGltZW91dDogMjAwLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHJlc3BvbnNlOiAoeyBoZWFkZXJzIH0pID0+IHtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbihoZWFkZXJzKTtcclxuICAgICAgY29uc3QgdXNlciA9IG1vY2tVc2VyTGlzdCgpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udG9rZW4gPT09IGFjY2Vzc1Rva2VuKTtcclxuICAgICAgcmV0dXJuIHVzZXIgPyBvayhudWxsLCAnVG9rZW4gaGFzIGJlZW4gZGVzdHJveWVkJykgOiBlcnJvcignSW52YWxpZCB0b2tlbiEnKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB1cmw6ICcvdXNlci9nZXRSb2xlTGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcclxuICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICB9LFxyXG4gIH0sXHJcbl0gYXMgTW9ja01ldGhvZFtdO1xyXG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxhcHBcXFxccHJvamVjdFxcXFx3ZWJcXFxcd3VodS1yZWFjdC1hZG1pblxcXFxtb2NrXFxcXHN5c1xcXFxyb2xlLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXGFwcFxcXFxwcm9qZWN0XFxcXHdlYlxcXFx3dWh1LXJlYWN0LWFkbWluXFxcXG1vY2tcXFxcc3lzXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9hcHAvcHJvamVjdC93ZWIvd3VodS1yZWFjdC1hZG1pbi9tb2NrL3N5cy9yb2xlLnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHVybDogJy9yb2xlL2dldFJvbGVMaXN0JyxcclxuICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICByZXNwb25zZTogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgIH0sXHJcbiAgfSxcclxuXSBhcyBNb2NrTWV0aG9kW107XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDTyxTQUFTLEdBQU0sTUFBUyxVQUFrQixNQUFNO0FBQ3JELFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7QUFDTyxTQUFTLE1BQU0sVUFBa0IsU0FBUztBQUMvQyxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQ0Y7QUFFTyxTQUFTLGVBQWUsU0FBcUI7QUFDbEQsU0FBTyxTQUFTO0FBQ2xCOzs7QUNmQSxTQUFTLGVBQWU7QUFDdEIsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLGVBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEIsWUFBTSxFQUFFLFVBQVUsU0FBUyxJQUFJO0FBQy9CLFlBQU0sT0FBTyxhQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVM7QUFDekMsZUFBTyxLQUFLLGFBQWEsWUFBWSxLQUFLLGFBQWE7QUFBQSxNQUN6RCxDQUFDO0FBQ0QsYUFBTyxPQUFPLEdBQUcsRUFBRSxjQUFjLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxrREFBVTtBQUFBLElBQ25FO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUN6QixZQUFNLGNBQWMsZUFBZSxPQUFPO0FBQzFDLFlBQU0sT0FBTyxhQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLFdBQVc7QUFDckUsYUFBTyxPQUFPLEdBQUcsTUFBTSwwQkFBMEIsSUFBSSxNQUFNLGdCQUFnQjtBQUFBLElBQzdFO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOzs7QUNwREEsSUFBTyxlQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLElBQ1IsVUFBVSxNQUFNO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
