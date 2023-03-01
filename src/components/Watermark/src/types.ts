export interface WatermarkProps extends BaseProps {
  // 水印宽度,默认:120
  width?: number;
  // 水印高度,默认:60
  height?: number;
  // 绘制水印时旋转的角度,默认:-22
  rotate?: number;
  // 图片源,优先使用图片渲染水印
  image?: string;
  // 图片宽度,默认:120
  imageWidth?: number;
  // 图片高度,默认:64
  imageHeight?: number;
  // 水印元素的z-index,默认:2000
  zIndex?: number;
  // 水印文字内容
  content?: string;
  // 水印文字大小
  fontSize?: number | string;
  // 水印文字颜色
  fontColor?: string;
  // 水印文字系列,默认:'PingFang SC'
  fontFamily?: string;
  // 水印文字样式,默认:'normal'
  fontStyle?: string;
  // 水印文字粗细,默认:'normal'
  fontWeight?: string;
  // 水印之间的水平间距,默认24
  gapX?: number;
  // 水印之间的垂直间距,默认:48
  gapY?: number;
  // 是否覆盖整个页面,默认false
  fullPage?: boolean;
}
