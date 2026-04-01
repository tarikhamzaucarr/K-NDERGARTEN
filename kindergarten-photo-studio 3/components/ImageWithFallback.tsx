'use client';

import Image from 'next/image';
import { useState } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const FALLBACK_IMAGE = '/placeholders/image-placeholder.svg';

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [imageSource, setImageSource] = useState(src);

  return (
    <Image
      {...props}
      alt={alt}
      src={imageSource}
      onError={() => setImageSource(FALLBACK_IMAGE)}
    />
  );
}
