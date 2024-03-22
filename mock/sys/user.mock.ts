// import { defineMock } from 'vite-plugin-mock-dev-server';
// import { err, getAccessToken, ok } from '../_util';

// function mockUserList() {
//   return [
//     {
//       userId: 1,
//       username: '2684837849',
//       password: '123456',
//       nickname: 'zchengfeng',
//       avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
//       token: 'fakeToken1',
//     },
//     {
//       userId: 2,
//       username: 'admin',
//       password: '123456',
//       nickname: 'wuhu',
//       avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
//       token: 'fakeToken2',
//     },
//   ];
// }

// export default defineMock([
//   {
//     url: '/auth/doLogin',
//     method: 'POST',
//     body: ({ body }) => {
//       const { username, password } = body;
//       const user = mockUserList().find((item) => {
//         return item.username === username && item.password === password;
//       });
//       return user ? ok({ access_token: user.token }) : err('用户名或密码错误');
//     },
//   },
//   {
//     url: '/auth/logout',
//     method: 'GET',
//     body: ({ headers }) => {
//       const accessToken = getAccessToken(headers);
//       const user = mockUserList().find((item) => item.token === accessToken);
//       return user ? ok(null, 'Token has been destroyed') : err('Invalid token!');
//     },
//   },
// ]);
