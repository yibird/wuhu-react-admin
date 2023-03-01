/**
 *
 * @param {*} base64Url canvas绘制图片的base64编码
 * @param {*} options 配置对象
 */
function setStyle(base64Url, options) {
  const el = document.getElementsByClassName("watermark")[0];
  if (!el) return;
  const { zIndex, gapX, width } = options;
  el.style.zIndex = zIndex;
  el.style.backgroundSize = `${gapX + width}px`;
  el.style.backgroundImage = `url(${base64Url})`;
}
