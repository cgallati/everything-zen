import { Button, Frame } from "./styles";
import React from "react";
import Image, { StaticImageData } from 'next/image';
import { useSpringCarousel } from "react-spring-carousel";

type Image = {
  src: StaticImageData;
  alt: string;
};

type GalleryProps = {
  images: Image[];
  startingIndex?: number;
};

export const Gallery: React.FC<GalleryProps> = ({
  images,
  startingIndex = 0,
}) => {
  const items = images.map((image, index) => ({
    id: `img-${index}`,
    renderItem: (
      <Image
        key={`img-${index}`}
        src={image.src}
        alt={image.alt}
        placeholder="blur"
      />
    ),
  }));

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem: startingIndex,
      withLoop: true,
      items,
      springConfig: {
        tension: 100,
      },
    });

  return (
    <Frame>
      <Button onClick={slideToPrevItem} />
      <Button onClick={slideToNextItem} />
      {carouselFragment}
    </Frame>
  );
};
