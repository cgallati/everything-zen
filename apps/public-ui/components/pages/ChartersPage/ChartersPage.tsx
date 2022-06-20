import {
  ContentSection,
  ImageSection,
  Paragraph,
  ResponsiveSubheading,
  Subheading,
  SubheadingAndFriend,
} from '../../common.styles';
import {
  CharterCard,
  CharterCardSection,
  Coordinates,
  CTAPadding,
  Heading,
  MainDetails,
  PaddedTileGrid,
  WhatToExpect,
} from './styles';
import { Gallery } from '../../Gallery/Gallery';
import React, { FC } from 'react';
import { Tile } from '../../Tile/Tile';
import { CTA } from '../../CTA/CTA';
import { Footer } from '../../Layout/Footer';
import { NextSeo } from 'next-seo';
import boat0 from '@photos/boat0.jpg';
import boat1 from '@photos/boat1.jpg';
import boat2 from '@photos/boat2.jpg';
import boat3 from '@photos/boat3.jpg';
import boat4 from '@photos/boat4.jpg';
import boat5 from '@photos/boat5.jpg';
import boat6 from '@photos/boat6.jpg';
import boat7 from '@photos/boat7.jpg';
import boat8 from '@photos/boat8.jpg';
import boat9 from '@photos/boat9.jpg';
import boat10 from '@photos/boat10.jpg';
import boat11 from '@photos/boat11.jpg';
import boat12 from '@photos/boat12.jpg';
import boat13 from '@photos/boat13.jpg';

export const ChartersPage: FC = () => {
  return (
    <>
      <NextSeo title={'CHARTERS & RATES'} />
      <ContentSection>
        <Heading>CHARTERS & RATES</Heading>
        <MainDetails>
          6 PASSENGERS MAX
          <span />3 HOURS
        </MainDetails>
        <ResponsiveSubheading>TIMES MAY VARY SEASONALLY</ResponsiveSubheading>
        <CharterCardSection>
          <CharterCard>
            <h4>$650</h4>
            <h5>AFTERNOON CRUISE</h5>
            <h6>2:00PM - 4:30PM</h6>
          </CharterCard>
          <CharterCard>
            <h4>$700</h4>
            <h5>SUNSET CRUISE</h5>
            <h6>5:30PM - 8:00PM</h6>
          </CharterCard>
          <CharterCard>
            <h4> </h4>
            <h5>EXTENDED SAILS AND SPECIAL EVENTS</h5>
            <p>CONTACT FOR ARRANGEMENTS</p>
          </CharterCard>
        </CharterCardSection>
        <CTAPadding>
          <CTA variant="bluefat" padding={false} />
        </CTAPadding>
        <WhatToExpect>WHAT TO EXPECT WHILE SAILING</WhatToExpect>
        <Paragraph>
          Climb aboard Charleston&apos;s most modern sailing charter. The entire
          experience is surrounded by historical landmarks. Our yacht is located
          in the shadows of the USS Yorktown and Ravenel Bridge. From there, we
          take off to explore the rest of Charleston Harbor and other
          surrounding landmarks that make this an iconic destination for
          sailing.
        </Paragraph>
        <Coordinates>
          <span>32.77’65’’ N</span>
          <span>77.93’11’’ W</span>
        </Coordinates>
        <Paragraph>
          Take an exclusive sail around the harbor and enjoy stunning views of
          Charleston Battery, Fort Sumter, Castle Pinkeney, Waterfront Park, and
          other sights only seen best from the water. We are also happy to
          accommodate you and your party with swimming arrangements along the
          way, conditions permitting.
        </Paragraph>
        <PaddedTileGrid>
          <div>
            <Tile
              iconSrc={'/icons/speaker.svg'}
              alt={'Bluetooth speaker'}
              text={'Bluetooth sound system available'}
            />
            <Tile
              iconSrc={'/icons/lifevest.svg'}
              alt={'Personal floatation device'}
              text={'Safety instruction given at the start of each charter'}
            />
          </div>
          <div>
            <Tile
              iconSrc={'/icons/binocs.svg'}
              alt={'Binoculars'}
              text={'Watch for dolphin and birds along your experience'}
            />
            <Tile
              iconSrc={'/icons/barrel.svg'}
              alt={'Wooden cask.'}
              text={'Special catering available from our local partners'}
            />
          </div>
        </PaddedTileGrid>
        <Paragraph>
          With Charleston Harbor being home to bountiful aquatic life such as
          dolphin and seabirds, you are bound to see wildlife while we sail
          around the harbor. This can be a wonderful opportunity for those who
          enjoy nature watching, or simply enjoy a lively atmosphere while
          sailing.
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
          startingIndex={6}
        />
        <ResponsiveSubheading>SPECIAL ACCOMMODATIONS</ResponsiveSubheading>
        {/*<Paragraph>*/}
        {/*  You are welcome to bring up to 6 people in your party, with the*/}
        {/*  ability to make accommodations to book a separate charter vessel if*/}
        {/*  you require a larger party. Parties interested in booking a separate*/}
        {/*  charter vessel should contact us prior too booking for possible*/}
        {/*  arrangements.*/}
        {/*</Paragraph>*/}
        {/*<MapScale src={'/icons/scale.svg'} />*/}
        <Paragraph>
          We also offer a catering option to allow you and your guests to relax
          to the fullest. Charter guests are also welcome to bring along food
          and beverages of their choice. We have ample water, ice, and
          refrigeration along with a microwave and tableware to accommodate your
          dining needs.
        </Paragraph>
        <SubheadingAndFriend>
          <Subheading>ABOUT THE BOAT</Subheading>
          <img
            src="/icons/NSEW.svg"
            alt="Compass icon"
            height="60px"
            width="60px"
          />
        </SubheadingAndFriend>
        <Paragraph>
          After years of experience sailing across seas while living aboard, we
          know your expectations for the atmosphere and service. Our Leopard 40’
          sailing catamaran has a modern layout that provides ample seating
          spaces, including a lounge space at the bow, with easy access in and
          around the yacht between spaces. Simply walk forward through the salon
          door to access the cushioned seating area and trampoline on the bow.
        </Paragraph>
        <ImageSection
          src={boat7}
          alt=""
          placeholder="blur"
          width={1000}
          height={714}
        />
        <Paragraph>
          Catamarans are also more spacious and stable than monohull sailboats.
          This reduces the likelihood of a spilled beverage and motion sickness,
          affording a relaxed atmosphere while underway. These important
          features provide a unique private sailing tour that is bound to please
          everyone onboard.
        </Paragraph>
        <CTAPadding>
          <CTA variant={'bluefat'} />
        </CTAPadding>
      </ContentSection>
      <Footer />
    </>
  );
};
