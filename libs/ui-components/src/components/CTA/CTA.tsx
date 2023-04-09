import {
  BlueAndFatButton,
  FatButton,
  Padding,
  SkinnierBluerStyledAnchor,
  StyledAnchor,
} from './styles';
import Link from 'next/link';

type CTAProps = {
  children?: string;
  variant?: 'blue' | 'white' | 'transparent' | 'fat' | 'bluefat';
  text?: string;
  route?: string;
  padding?: boolean;
};

export const AnchorCTA: React.FC<CTAProps> = ({
  route = '/reserve',
  children = 'BOOK A CHARTER',
  variant,
}) =>
  variant === 'bluefat' ? (
    <Padding>
      <SkinnierBluerStyledAnchor href={route}>
        {children}
      </SkinnierBluerStyledAnchor>{' '}
    </Padding>
  ) : (
    <Padding>
      <StyledAnchor href={route}>{children}</StyledAnchor>
    </Padding>
  );

export const CTA: React.FC<CTAProps> = ({
  variant,
  text = 'BOOK A CHARTER',
  route = '/reserve',
  padding = true,
}) => {
  const Button = variant === 'fat' ? FatButton : BlueAndFatButton;
  return padding ? (
    <Padding>
      <Link href={route}>
        <Button>{text}</Button>
      </Link>
    </Padding>
  ) : (
    <Link href={route}>
      <Button>{text}</Button>
    </Link>
  );
};
