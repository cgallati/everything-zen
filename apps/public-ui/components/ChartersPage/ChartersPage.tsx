import {
  ContentSection,
  ImageSection,
  Paragraph,
  ResponsiveSubheading,
  Subheading,
  SubheadingAndFriend,
  Gallery,
  Tile,
  CTA,
  AnchorCTA,
} from '@everything-zen/ui-components';
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
import React, { FC } from 'react';
import { Footer } from '../Layout/Footer';
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
import { Layout } from '../Layout';

export const ChartersPage: FC = () => {
  return (
    <Layout>
      <ContentSection>
        <Heading>CHARTERS & RATES</Heading>
        <MainDetails>
          6 PASSENGERS MAX
          <span />2 1/2 HOURS
        </MainDetails>
        <ResponsiveSubheading>TIMES MAY VARY SEASONALLY</ResponsiveSubheading>
        <CharterCardSection>
          <CharterCard>
            <h4>$675</h4>
            <h5>AFTERNOON CRUISE</h5>
          </CharterCard>
          <CharterCard>
            <h4>$750</h4>
            <h5>SUNSET CRUISE</h5>
          </CharterCard>
          <CharterCard>
            <h4></h4>
            <h5>EXTENDED SAILS AND SPECIAL EVENTS</h5>
            <p>CONTACT FOR ARRANGEMENTS</p>
          </CharterCard>
        </CharterCardSection>
        <CTAPadding>
          <CTA
            variant="bluefat"
            padding={false}
            text={'SEE CALENDAR FOR TIMES'}
          />
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
              alt={
                'Bluetooth audio available throughout the spacious catamaran charter.'
              }
              text={'Bluetooth sound system available'}
            />
            <Tile
              iconSrc={'/icons/lifevest.svg'}
              alt={
                'Safety of our private charter guests is of upmost importance.'
              }
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
            {
              src: boat0,
              alt: 'Enjoy views of the Ravenel Bridge from your sailboat charter.',
            },
            {
              src: boat1,
              alt: 'Explore the large galley of our stable catamaran rental.',
            },
            {
              src: boat2,
              alt: 'See the USS Yorktown as we depart on your Charleston Sailing adventure.',
            },
            {
              src: boat3,
              alt: 'Lounge in luxury on a Charleston sailboat rental.',
            },
            {
              src: boat4,
              alt: 'Relax and unwind with a private view of downtown Charleston SC.',
            },
            {
              src: boat5,
              alt: "A private Everything Zen Sailing Charter along Charleston's Low Battery.",
            },
            {
              src: boat6,
              alt: "Take in the sun and the history on Charleston's most luxurious private catamaran.",
            },
            {
              src: boat7,
              alt: 'Enjoy a glass with friends on your Charleston catamaran charter.',
            },
            {
              src: boat8,
              alt: "Our private catamaran charter's spacious and open aft seating and galley.",
            },
            {
              src: boat9,
              alt: 'Visit the helm to learn how to navigate our private catamaran through Charleston Harbor.',
            },
            {
              src: boat10,
              alt: 'A bottle of wine and glasses on the aft table during a sailboat charter.',
            },
            {
              src: boat11,
              alt: 'Sunset charters are available for private parties in Charleston SC.',
            },
            {
              src: boat12,
              alt: 'Hit the water while on your Charleston vacation.',
            },
            {
              src: boat13,
              alt: "Get a new perspective from Charleston Harbor's best sailboat charter.",
            },
          ]}
          startingIndex={6}
        />
        <ResponsiveSubheading>SPECIAL ACCOMMODATIONS</ResponsiveSubheading>
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
          alt={
            'Enjoy a glass with friends on your Charleston catamaran charter.'
          }
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
          <AnchorCTA variant={'bluefat'} />
        </CTAPadding>
      </ContentSection>
      <Footer />
    </Layout>
  );
};
