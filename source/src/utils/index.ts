import {Dimensions, PixelRatio} from 'react-native';

/**
 * 获取设备宽高
 */
function getDeviceSize() {
  return [Dimensions.get('window').width, Dimensions.get('window').height];
}

/**
 * 获取缩放比例与像素密度
 */
function getFontScale() {
  return [PixelRatio.getFontScale(), PixelRatio.get()];
}

const [deviceWidth, deviceHeight] = getDeviceSize();
const [fontScale, pixelRatio] = getFontScale();

// 默认宽高及像素密度
const defaultWidth = 375;
const defaultHeight = 812;
const defaultPixel = 2;

//px转换成dp
const w2 = defaultWidth / defaultPixel;
const h2 = defaultHeight / defaultPixel;

//获取缩放比例
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);
const scaleWidth = deviceWidth / w2;

/**
 * 设置
 */
export function setSpText(size: number) {
  size = Math.round(((size * scale + 0.5) * pixelRatio) / fontScale);
  return size / defaultPixel;
}

/**
 * px 转 dp
 */
export function scaleSize(size: number) {
  size = Math.round(size * scaleWidth);
  return size / defaultPixel;
}
