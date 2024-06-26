import { Layout, Page } from '../Layout';
import React, { FC } from 'react';
import friends0 from '../../public/photos/friends0.jpg';
import friends1 from '../../public/photos/friends1.jpg';
import friends2 from '../../public/photos/friends2.jpg';
import friends3 from '../../public/photos/friends3.jpg';
import friends4 from '../../public/photos/friends4.jpg';
import friends5 from '../../public/photos/friends5.jpg';
import sunset1 from '../../public/photos/sunset1.jpg';
import {
  ImageSection,
  Paragraph,
  ResponsiveSubheading,
  Subheading,
  SubheadingAndFriend,
  BigTile,
  Gallery,
  AnchorCTA,
} from '@everything-zen/ui-components';
import { TileList } from './styles';

export const SpecialOccasionsPage: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <Layout bannerText={bannerText}>
      <Page title={'special occasions'}>
        <Paragraph>
          Charleston is one of the most famous locations for celebrations and
          special occasions. Our sailing tour is bound to be the perfect setting
          for your occasion with charter guests. Whatever the occasion may be,
          we are happy to make it possible.
        </Paragraph>
        <ImageSection
          src={friends0}
          alt=""
          placeholder="blur"
          width={1000}
          height={714}
        />
        <ResponsiveSubheading>
          THE PERFECT SAILING ATMOSPHERE
        </ResponsiveSubheading>
        <Paragraph>
          Have the time of your life sailing Charleston Harbor on board
          Charleston&apos;s most exclusive sailing charter. From cruising and
          sunbathing with your closest friends, to celebratory champagne at
          sunset, our catamaran offers one of the most unique settings for your
          special occasion, whether it&apos;s a bachelorette party, romantic
          occasion, or just a casual get together.
        </Paragraph>
        <ImageSection
          src={sunset1}
          alt=""
          placeholder="blur"
          width={1000}
          height={714}
        />
        <ResponsiveSubheading>
          SUNSET CRUISES ON THE HARBOR
        </ResponsiveSubheading>
        <Paragraph>
          Our sailing tour can be a great setting for relaxing sunsets, offering
          you golden hour views on the historic Charleston Harbor for the
          perfect cocktail or glass of wine. This can be the perfect atmosphere
          for proposals and other romantic occasions. Sunset cruises are the
          most popular choice for our sailing charters, so please do not delay
          on booking if you want to experience this incredible opportunity.
        </Paragraph>
        <TileList>
          <BigTile
            iconSrc={'/icons/flutes.svg'}
            iconAlt={'Wine flutes toasting.'}
            title={'ROMANTIC SUNSETS'}
            body={
              'Enjoy a spectacular sunset on the water with your loved one as you take in views of Charleston Harbor.'
            }
          />
          <BigTile
            iconSrc={'/icons/bikini.svg'}
            iconAlt={'Bikini swimsuit.'}
            title={'BACHELORETTE PARTIES'}
            body={
              'Sailing on a modern catamaran with ample seating creates the perfect setting for celebrating with friends.'
            }
          />
          <BigTile
            iconSrc={'/icons/sun.svg'}
            iconAlt={'Full sun.'}
            title={'FAMILY AND FRIENDS'}
            body={
              'Whether its family or friends, your time on board will create the most memorable experiences together.'
            }
          />
        </TileList>
        <Gallery
          images={[
            { src: friends0, alt: '' },
            { src: friends1, alt: '' },
            { src: friends2, alt: '' },
            { src: friends3, alt: '' },
            { src: friends4, alt: '' },
            { src: friends5, alt: '' },
          ]}
          startingIndex={1}
        />
        <ResponsiveSubheading>
          SPECIAL CATERING FOR THE CHARTER
        </ResponsiveSubheading>
        <Paragraph>
          We know time and quality are important to you, which is why we
          recommend special catering from one of our favorites, Caviar &
          Bananas. They offer a large, fresh nautical menu that is delivered and
          set up on our boat, hassle free. This helps ease stress on food and
          can help you and your charter guests focus on having the best time
          possible while you are on board.
        </Paragraph>
        <AnchorCTA route={'/catering'}>CATERING</AnchorCTA>
        <AnchorCTA route={'/charters'}>CHARTERS & RATES</AnchorCTA>
        <SubheadingAndFriend>
          <Subheading>CHARTER WITH US</Subheading>
          <img
            src="/icons/NSEW.svg"
            alt="Charleston Harbor Logo"
            height="60px"
            width="60px"
          />
        </SubheadingAndFriend>
        <Paragraph>
          We aren’t strangers to hosting gatherings, and we know these moments
          on board should be stress-free. We want you to focus on enjoying the
          company of your charter guests, and will help with accommodating your
          party to assure everyone on board is having a relaxing and care-free
          time.
        </Paragraph>
        <AnchorCTA variant={'bluefat'} />
      </Page>
    </Layout>
  );
};
