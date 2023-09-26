export interface UserState {
    // 用户详情对象
    userInfo: Nullable<object>;
    // 用户token
    token?: string;
    // 角色列表
    roleList: any[];
    // 上次更新时间
    lastUpdateTime: number;
}