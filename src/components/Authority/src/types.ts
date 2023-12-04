export interface AuthorityProps extends BaseProps {
  /**
   * @desc 权限
   * @default
   */
  value?: string | string[];
  /**
   * @desc 自定义授权处理器
   * @default
   */
  handle?: () => boolean;
}
