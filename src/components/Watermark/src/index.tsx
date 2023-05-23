import React, { CSSProperties, useMemo, useState, useEffect } from "react";
import type { WatermarkProps } from "./types";

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
    const ratio = window.devicePixelRatio || 1;
    const canvasWidth = `${(gapX + width) * ratio}px`,
      canvasHeight = `${(gapY + height) * ratio}px`;
    const markWidth = width * ratio,
      markHeight = height * ratio;

    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);

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
        setBase64Url(canvas.toDataURL());
      };
      return;
    }

    if (content) {
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.translate(markWidth / 2, markHeight / 2);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      const markSize = Number(fontSize) * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
      ctx.fillStyle = fontColor;
      ctx.fillText(content, 0, 0);
      ctx.restore();
      setBase64Url(canvas.toDataURL());
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
      position: fullPage ? "fixed" : "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      pointerEvents: "none",
      backgroundRepeat: "repeat",
      zIndex,
      backgroundSize: `${gapX + width}px`,
      backgroundImage: `url(${base64Url})`,
      ...style,
    };
    return styleProp;
  }, [gapX, width, base64Url, zIndex, fullPage]);

  return <div style={getStyle} className={className}></div>;
}
Watermark.displayName = "Watermark";

export default Watermark;
