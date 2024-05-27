import { BannerBox } from './styles';

export const Banner: React.FC<{bannerText?: string}> = ({ bannerText }) => {
  if (!bannerText) return null;

  return (
    <BannerBox>
      <p>{bannerText} <a href={'https://everythingzensailing.com/reserve'} style={{ color: 'white' }}>Book Now!</a></p>
    </BannerBox>
  );
};

