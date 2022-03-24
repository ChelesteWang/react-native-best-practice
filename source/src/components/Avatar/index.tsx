import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

const ImageAvatar = ({
  src,
  size,
  imageStyle,
  borderRadius,
}: {
  src?: string;
  size: number;
  imageStyle?: any;
  borderRadius?: number;
}) => {
  const imageDefaultStyle = {
    borderRadius: borderRadius ? borderRadius : size * 0.5,
    width: size,
    height: size,
  };

  const newProps = {
    style: [imageDefaultStyle, imageStyle],
    source: {uri: src},
  };

  return <Image {...newProps} />;
};

ImageAvatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  imageStyle: PropTypes.object,
  borderRadius: PropTypes.number,
};

export default ImageAvatar;
