import React, { CSSProperties, useMemo, useState, useEffect } from "react";

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

function Watermark({
  width = 120,
  height = 60,
  rotate = -22,
  image,
  imageWidth = 120,
  imageHeight = 64,
  zIndex = 2000,
  content = "",
  fontSize = 14,
  fontColor = "rgba(0,0,0,.15)",
  fontStyle = "normal",
  fontFamily = "PingFang SC",
  fontWeight = "normal",
  gapX = 24,
  gapY = 48,
  fullPage,
  style,
  className,
}: WatermarkProps) {
  const [base64Url, setBase64Url] = useState("");
  const init = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("当前环境不支持canvas");
    }
    // 返回当前显示设备的物理像素分辨率与CSS 像素分辨率之比
    const ratio = window.devicePixelRatio;
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const markWidth = width * ratio,
      markHeight = height * ratio;
    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);

    // 渲染图片水印
    if (image) {
      ctx.translate(markWidth / 2, markHeight / 2);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.referrerPolicy = "no-referrer";
      img.src = image;
      img.onload = () => {
        ctx.drawImage(
          img,
          (-imageWidth * ratio) / 2,
          (-imageHeight * ratio) / 2,
          imageWidth * ratio,
          imageHeight * ratio
        );
        ctx.restore();
        // canvas转base64
        setBase64Url(canvas.toDataURL);
      };
      return;
    }
    // 渲染文字水印
    if (content) {
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      // 文字绕中间旋转
      ctx.translate(markWidth / 2, markHeight / 2);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      const markSize = Number(fontSize) * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
      ctx.fillStyle = fontColor;
      ctx.fillText(content, 0, 0);
      ctx.restore();
      setBase64Url(canvas.toDataURL);
    }
  };

  useEffect(() => {
    init();
  }, [
    gapX,
    gapY,
    width,
    height,
    rotate,
    image,
    imageWidth,
    imageHeight,
    content,
    fontStyle,
    fontWeight,
    fontColor,
    fontSize,
    fontFamily,
    fullPage,
  ]);

  const getStyle = useMemo((): CSSProperties => {
    const styleProp: CSSProperties = {
      zIndex,
      backgroundSize: `${gapX + width}px`,
      backgroundImage: `url(${base64Url})`,
      ...style,
    };
    if (fullPage) {
      Object.assign(styleProp, {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      });
    }
    return styleProp;
  }, [gapX, width, base64Url, zIndex, fullPage]);

  return <div style={getStyle} className={className}></div>;
}
Watermark.displayName = "Watermark";
export default Watermark;
