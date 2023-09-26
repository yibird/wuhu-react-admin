import type { SizeEnum } from '@/enums/sizeEnum';
export interface LoadingProps extends BaseProps {
  /**
   * @desc loading提示文字
   * @default
   */
  tip?: string;
  /**
   * @desc loading大小
   * @default large
   */
  size?: SizeEnum;
  /**
   * @desc 是否全屏显示loading
   * @default false
   */
  full?: boolean;
  /**
   * @desc 是否显示loading
   * @default false
   */
  loading?: boolean;
  /**
   * @desc loading背景颜色
   * @default
   */
  background?: string;
  /**
   * @desc 主题
   * @default
   */
  theme?: 'dark' | 'light';
}
