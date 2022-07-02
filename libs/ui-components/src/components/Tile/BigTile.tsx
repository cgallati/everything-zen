import { BodyText, BigTileText, BigTileFrame, SizedIcon } from './styles';
import React from 'react';

type BigTileProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  body: string;
};

export const BigTile: React.FC<BigTileProps> = ({
  iconSrc,
  iconAlt,
  title,
  body,
}) => {
  return (
    <BigTileFrame>
      <SizedIcon src={iconSrc} alt={iconAlt} />
      <BigTileText>{title}</BigTileText>
      <BodyText>{body}</BodyText>
    </BigTileFrame>
  );
};
