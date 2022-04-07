# IOS & Android 样式统一

## 字体处理

提供统一字体 ，系统字体作为备选

由于 Android 机在 RN 的开发测试中的方便性，会先利用 Android 机进行 RN 的静态界面样式开发，但这些静态界面在 IOS 设备上会出现一些样式问题。同时，打包后发布的版本与打包前版本样式上也会有些差错，现总结主要问题如下：

## IOS 上文本显示不全

原因：给文本设置了`padding`或者`margin`等属性  
解决方法：不要给文本设置任何的布局属性，所有的布局属性如`flex, padding, margin`等都由外层的 View 实现。

## 图片上的文本在 IOS 上显示为一个白色框

解决方法： 图片上的文本外层 View 需要设置背景透明  
`backgroundColor: 'transparent'`

## 打包后图片显示不出来或者图片显示尺寸有误

原因：图片使用了中文命名，会导致打包后乱码，找不到图片。而图片不设置宽高，则图片尺寸会有误。  
解决方法：所有图片都使用英文命名，且引入的图片一定要设置宽高属性。

## 设置的上边框在某些 IOS 设备（如 iPhone SE）上显示为较大的间距，边框不可见

原因：RN 中的 borderTop 相关属性在 IOS 上显示不正确  
解决方法： 所有与 borderTop 相关的属性可利用 View 解决  
`<View style={{ height: dp(2), backgroundColor: '#efefef' }} />`

## RN 的阴影属性支持 IOS 不支持 Android 怎么办？

使用 react-native-drop-shadow 库辅助开发，使用位图可以同时兼容 ios 以及 android

## 多个横排 View 的左右边框设置在某些 IOS 设备上显示不正确

解决方法： 使用带相应背景色的`View`替换左右边框

## 屏幕大小适配

可以参考[
聊聊 React Native 屏幕适配那些事儿](https://juejin.cn/post/6950187009407189005)

```js
import { Dimensions, PixelRatio } from "react-native";

/**
 * 获取设备宽高
 */
function getDeviceSize() {
  return [Dimensions.get("window").width, Dimensions.get("window").height];
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
```

## 图片宽高自适应

```js
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
Math.floor(screenWidth/width*height);
```

## 文字竖向布局

```js
import {Platform} from 'react-native';
 
style: {
  fontSize: 28,
  height: 40,
  textAlign: 'center',
  textAlignVertical: 'center',
  ...Platform.select({
      ios: { lineHeight: 40 },
      android: {}
  })
}
```

## 样式最佳实践

[主题与样式组件的应用](https://blog.openreplay.com/theming-react-native-applications-with-styled-components)
[改进 React Native 样式管理的 5 种方法](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
[restyle](https://github.com/Shopify/restyle)
[React Native 之图片/宽高/字体平台适配](https://blog.51cto.com/u_15080029/3468992)
