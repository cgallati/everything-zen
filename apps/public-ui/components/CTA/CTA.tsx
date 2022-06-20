import {
  BlueAndFatButton,
  BlueButton,
  FatButton,
  Padding,
  TransparentButton,
  WhiteButton,
} from './styles';
import Link from 'next/link';

type CTAProps = {
  variant: 'blue' | 'white' | 'transparent' | 'fat' | 'bluefat';
  text?: string;
  route?: string;
  padding?: boolean;
};

export const CTA: React.FC<CTAProps> = ({
  variant,
  text = 'BOOK A CHARTER',
  route = '/reserve',
  padding = true,
}) => {
  const Button =
    variant === 'blue'
      ? BlueButton
      : variant === 'white'
      ? WhiteButton
      : variant === 'fat'
      ? FatButton
      : variant === 'bluefat'
      ? BlueAndFatButton
      : TransparentButton;
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
