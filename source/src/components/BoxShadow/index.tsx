import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

/*
 * tab 阴影
 * box-shadow: 0px 1px 9px 1px #E7E7E7;
 * x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色
 */
const shadowStyle = {
  shadowColor: '#E7E7E7',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 9,
};

export default function BoxShadow({
  style,
  children,
}: {
  style?: StyleProp<ViewStyle>;
  children?: any;
}) {
  return <DropShadow style={[style, shadowStyle]}>{children}</DropShadow>;
}
