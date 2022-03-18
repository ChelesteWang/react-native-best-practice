# IOS & Android 样式统一

## 字体处理

提供统一字体 ，系统字体作为备选

由于Android机在RN的开发测试中的方便性，会先利用Android机进行RN的静态界面样式开发，但这些静态界面在IOS设备上会出现一些样式问题。同时，打包后发布的版本与打包前版本样式上也会有些差错，现总结主要问题如下：

## IOS上文本显示不全
原因：给文本设置了`padding`或者`margin`等属性  
解决方法：不要给文本设置任何的布局属性，所有的布局属性如`flex, padding, margin`等都由外层的View实现。

## 图片上的文本在IOS上显示为一个白色框
解决方法： 图片上的文本外层View需要设置背景透明  
`backgroundColor: 'transparent'`

## 打包后图片显示不出来或者图片显示尺寸有误  
原因：图片使用了中文命名，会导致打包后乱码，找不到图片。而图片不设置宽高，则图片尺寸会有误。  
解决方法：所有图片都使用英文命名，且引入的图片一定要设置宽高属性。

## 设置的上边框在某些IOS设备（如iPhone SE）上显示为较大的间距，边框不可见  
原因：RN中的borderTop相关属性在IOS上显示不正确  
解决方法： 所有与borderTop相关的属性可利用View解决  
`<View style={{ height: dp(2), backgroundColor: '#efefef' }} />`

## RN的阴影属性支持IOS不支持Android怎么办？  
使用 react-native-drop-shadow 库辅助开发，使用位图可以同时兼容 ios 以及 android

## 多个横排View的左右边框设置在某些IOS设备上显示不正确  
解决方法： 使用带相应背景色的`View`替换左右边框

## 样式最佳实践

[主题与样式组件的应用](https://blog.openreplay.com/theming-react-native-applications-with-styled-components)
[改进 React Native 样式管理的 5 种方法](https://shopify.engineering/5-ways-to-improve-your-react-native-styling-workflow)
[restyle](https://github.com/Shopify/restyle)
[React Native之图片/宽高/字体平台适配](https://blog.51cto.com/u_15080029/3468992)

