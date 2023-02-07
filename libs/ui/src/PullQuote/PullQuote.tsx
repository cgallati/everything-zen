import { FC } from 'react';
import { Text } from '../Text'
import { styled } from '../../stitches.config';

const QuoteFrame = styled('section', {
  '@bp1' : {

  }
  }
)

export const PullQuote: FC<{ children: string }> = ({ children }) => (
  <QuoteFrame>
    <Text as={'h2'}>{children}</Text>
  </QuoteFrame>
);
