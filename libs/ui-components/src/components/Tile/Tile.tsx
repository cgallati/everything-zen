import {
  Icon,
  NarrowTileText,
  TileFrame,
  TileImgFrame,
  TileText,
} from './styles';
import React from 'react';

type TileProps = {
  iconSrc?: string;
  alt?: string;
  text?: string;
  photo?: string;
};

export const Tile: React.FC<TileProps> = ({ iconSrc, alt, text, photo }) => {
  if (photo) {
    return iconSrc ? (
      <a href={iconSrc}>
        <TileImgFrame src={photo} alt={alt} />
      </a>
    ) : (
      <TileImgFrame src={photo} alt={alt} />
    );
  }

  return (
    <TileFrame>
      <Icon src={iconSrc} alt={alt} />
      {text && text.length > 40 ? (
        <TileText>{text}</TileText>
      ) : (
        <NarrowTileText>{text}</NarrowTileText>
      )}
    </TileFrame>
  );
};
