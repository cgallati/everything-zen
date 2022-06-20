import expertiseSVG from '../../public/expertise-charters-2022.svg';
import { Wrapper } from '@components/Endorsement/styles';
import Image from 'next/image';

export const Endorsement = () => {
  return (
    <Wrapper href={'https://www.expertise.com/sc/charleston/boat-charters'}>
      <Image src={expertiseSVG} />
    </Wrapper>
  );
};
