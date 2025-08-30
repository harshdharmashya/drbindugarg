import React from 'react';
import Image from 'next/image';
import { UPLOAD_BASE_URL } from '@/constants/admin';

interface ImageWithPrefixProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const ImageWithPrefix: React.FC<ImageWithPrefixProps> = ({ src, alt, width, height, ...rest }) => {
  if (width && height) {
    return <Image src={`${UPLOAD_BASE_URL}${src}`} alt={alt || 'Image'} width={width} height={height} {...rest} />;
  }

  return <img src={`${UPLOAD_BASE_URL}${src}`} alt={alt} {...rest} />;
};

export default ImageWithPrefix;
