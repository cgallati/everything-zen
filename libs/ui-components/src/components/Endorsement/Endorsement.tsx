import { Wrapper } from './styles';
import Image, { StaticImageData } from 'next/image';

export const Endorsement: React.FC<{ img: StaticImageData }> = ({ img }) => {
  return (
    <Wrapper href={'https://www.expertise.com/sc/charleston/boat-charters'}>
      <Image src={img} />
    </Wrapper>
  );
};
