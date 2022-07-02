import Image from 'next/image';
import Link from 'next/link';
import {
  Heading,
  LocationHeading,
  PositionedCTA,
  WithBackground,
} from './styles';
import React from 'react';
import mobileBG from '../../public/photos/bg-m.jpg';
import desktopBG from '../../public/photos/bg-d.jpg';
import boat0 from '../../public/photos/boat0.jpg';
import boat1 from '../../public/photos/boat1.jpg';
import boat2 from '../../public/photos/boat2.jpg';
import boat3 from '../../public/photos/boat3.jpg';
import boat4 from '../../public/photos/boat4.jpg';
import boat5 from '../../public/photos/boat5.jpg';
import boat6 from '../../public/photos/boat6.jpg';
import boat7 from '../../public/photos/boat7.jpg';
import boat8 from '../../public/photos/boat8.jpg';
import boat9 from '../../public/photos/boat9.jpg';
import boat10 from '../../public/photos/boat10.jpg';
import boat11 from '../../public/photos/boat11.jpg';
import boat12 from '../../public/photos/boat12.jpg';
import boat13 from '../../public/photos/boat13.jpg';
import expertiseSVG from '../../public/expertise-charters-2022.svg';
import {
  ContentSection,
  ImageSection,
  MapScale,
  Paragraph,
  ResponsiveSubheading,
  Subheading,
  SubheadingAndFriend,
  CTA,
  Gallery,
  Endorsement,
} from '@everything-zen/ui-components';
import { Footer } from '../Layout/Footer';
import { useWindowSize } from '../../hooks/useWindowSize';

export const LandingPage: React.FC = () => {
  const { width } = useWindowSize();

  const imgSrc = (width || 500) <= 480 ? mobileBG : desktopBG;

  return (
    <>
      <WithBackground>
        <Image
          className={'bg-image'}
          alt={'background image; a catamaran under sail from above.'}
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="30% center"
          placeholder="blur"
          priority={true}
        />
        <Heading>WELCOME ABOARD YOUR 40’ CATAMARAN</Heading>
        <Link href={'/reserve'}>
          <PositionedCTA>BOOK A CHARTER</PositionedCTA>
        </Link>
      </WithBackground>
      <ContentSection>
        <ResponsiveSubheading>
          SAILS FULL, ENGINES OFF, PEACE OF MIND
        </ResponsiveSubheading>
        <Paragraph>
          Sit back and let us take the helm while you enjoy the harbor breeze.
          Whether it’s a get-together with friends or a romantic sail with a
          loved one, Everything Zen Sailing Charters offers an unforgettable
          Charleston sailing experience.
        </Paragraph>
        <ImageSection
          src={boat10}
          alt="A bottle of wine and glasses on the aft table."
          placeholder="blur"
          width={1000}
          height={714}
        />
        <SubheadingAndFriend>
          <Subheading>WELCOME ABOARD</Subheading>
          <img src="/ez.svg" alt="E and Z logo" height="60px" width="60px" />
        </SubheadingAndFriend>
        <Paragraph>
          Our modern and spacious layout provides a panoramic view with large
          sliding glass doors between the saloon and the rear deck space and an
          access door to the bow of the boat. These features offer an open
          concept with easy navigation in and around the yacht, unifying
          gathering areas and providing plenty of room with great airflow.
        </Paragraph>
        <ImageSection
          src={boat8}
          alt="Everything Zen's spacious and open aft seating and galley."
          placeholder="blur"
          width={1500}
          height={1071}
        />
        <SubheadingAndFriend>
          <Subheading>CHARLESTON HARBOR</Subheading>
          <img
            src="/chs-hbr.svg"
            alt="Charleston Harbor Logo"
            height="60px"
            width="60px"
          />
        </SubheadingAndFriend>
        <Paragraph>
          With engines off and sails full, sailing in Charleston Harbor is an
          experience you and your guests will never forget. Your party will have
          the opportunity to sail by the USS Yorktown, Ravenel Bridge,
          Charleston Battery, Castle Pinckney, and Fort Sumter.
        </Paragraph>
        <ImageSection
          src={boat5}
          alt="Everything Zen sails along Charleston's Low Battery."
          placeholder="blur"
          width={1000}
          height={714}
        />
        <ResponsiveSubheading>
          COMFORT AND STABILITY WHILE UNDERWAY
        </ResponsiveSubheading>
        <Paragraph>
          Catamarans offer a more stable ride on the water, giving you optimal
          comfort and relaxation while you and your guests are underway.
        </Paragraph>
        <Gallery
          images={[
            { src: boat0, alt: '' },
            { src: boat1, alt: '' },
            { src: boat2, alt: '' },
            { src: boat3, alt: '' },
            { src: boat4, alt: '' },
            {
              src: boat5,
              alt: "Everything Zen sails along Charleston's Low Battery.",
            },
            { src: boat6, alt: '' },
            { src: boat7, alt: '' },
            {
              src: boat8,
              alt: "Everything Zen's spacious and open aft seating and galley.",
            },
            { src: boat9, alt: '' },
            {
              src: boat10,
              alt: 'A bottle of wine and glasses on the aft table.',
            },
            { src: boat11, alt: '' },
            { src: boat12, alt: '' },
            { src: boat13, alt: '' },
          ]}
          startingIndex={4}
        />
        <MapScale src={'/icons/scale.svg'} />
        <CTA variant={'fat'} text={'CHARTERS & RATES'} route={'/charters'} />
        <CTA
          variant={'fat'}
          text={'SPECIAL OCCASIONS'}
          route={'/special-occasions'}
        />
        <CTA variant={'fat'} text={'OUR STORY'} route={'/story'} />
        <LocationHeading>
          LOCATED AT
          <br />
          CHARLESTON HARBOR MARINA
        </LocationHeading>
        <Paragraph>
          We are located at Charleston Harbor Marina, next to The Fish House and
          Patriots Point. Even while docked, the Marina provides phenomenal
          views of iconic Charleston landmarks such as the Ravenel Bridge and
          USS Yorktown. Experience one of our nation’s most historic harbors up
          close and in person!
        </Paragraph>
        <CTA variant={'bluefat'} />
        <Endorsement img={expertiseSVG} />
      </ContentSection>
      <Footer />
    </>
  );
};
