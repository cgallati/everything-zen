import { Layout, Page } from '../Layout';
import {
  ImageSection,
  Paragraph,
  ResponsiveSubheading,
  Subheading,
  SubheadingAndFriend,
  TileGrid,
  Tile,
  CTA,
} from '@everything-zen/ui-components';
import toddKathy from '../../public/photos/toddAndKathy.jpg';
import React from 'react';
import { InstaHeading } from './styles';
import friends3 from '../../public/photos/friends3.jpg';
import friends5 from '../../public/photos/friends5.jpg';
import testimonial1 from '../../public/testimonials/Testimonial_1.png';
import testimonial2 from '../../public/testimonials/Testimonial_2.png';
import testimonial3 from '../../public/testimonials/Testimonial_3.png';
import testimonial4 from '../../public/testimonials/Testimonial_4.png';
import testimonialPic1 from '../../public/testimonials/bw-testimonial0.jpg';
import testimonialPic2 from '../../public/testimonials/bw-testimonial1.jpg';
import testimonialPic3 from '../../public/testimonials/bw-testimonial2.jpg';

export const OurStoryPage = () => {
  return (
    <Layout>
      <Page title={'our story'}>
        <Paragraph>
          After years of sailing around the Caribbean & Southeast with family
          and friends, Captain Todd Gallati believes that the experience of
          sailing needs to be shared. Above all, we value experiences with
          family and friends, and we know you do too.
        </Paragraph>
        <ImageSection
          src={friends3}
          alt=""
          placeholder="blur"
          width={1000}
          height={714}
        />
        <Paragraph>
          The relaxed atmosphere and memories you create with friends and loved
          ones along the way are at the core of our chartering business. Our
          goal is to provide modern luxury that makes you feel safe and carefree
          while underway. This gives you peace-of-mind so you can turn your full
          attention to your party onboard, while we take care of the rest.
        </Paragraph>
        <ImageSection
          src={toddKathy}
          alt="Captain Todd and wife Kathy Gallati"
          placeholder="blur"
        />
        <SubheadingAndFriend>
          <Subheading>MEET YOUR CREW</Subheading>
          <img src="/ez.svg" alt="E and Z logo" height="60px" width="60px" />
        </SubheadingAndFriend>
        <Paragraph>
          Captain Todd is licensed with the US Coast Guard with years of
          maritime experience sailing his large vessel catamarans. Both he and
          his wife, Kathy, have vast experience sailing and operating large
          vessels together. It has become a passion and a lifestyle, something
          they both love sharing with others.
        </Paragraph>
        <ImageSection
          src={friends5}
          alt=""
          placeholder="blur"
          width={1000}
          height={714}
        />
        <ResponsiveSubheading>
          A CHARTER YOU WILL NEVER FORGET
        </ResponsiveSubheading>
        <Paragraph>
          Giving you the best sailing experience in Charleston is something we
          don’t take for granted and we are always privileged to have guests
          onboard. Our business wouldn&apos;t exist without our valuable charter
          guests and we guarantee to make you and your party&apos;s Charleston
          experience unforgettable.
        </Paragraph>
        <ResponsiveSubheading>JOIN THE SAILING EXPERIENCE</ResponsiveSubheading>
        <Paragraph>
          Join our story and climb aboard! Come be a part of an exclusive
          private sailing charter in the Charleston Harbor. The atmosphere our
          charter tour provides is a perfect setting for anything you&apos;re
          planning. We believe in accommodating our charter guests to maximize
          expectations, and hope you will reach out if you have any questions or
          concerns. Come feel the harbor breeze while you experience sailing in
          one of the most historic harbors of our nation!
        </Paragraph>
        <CTA variant={'bluefat'} />
        <InstaHeading href={'https://www.instagram.com/everythingzensailing/'}>
          JOIN OUR STORY ON INSTAGRAM
        </InstaHeading>
        <TileGrid>
          <div>
            <Tile
              photo={'/photos/relaxing-on-trampoline.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CTOF6e2rPo_/?utm_source=ig_web_copy_link'
              }
            />
            <Tile
              photo={'/photos/sunset-smiles.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRy7Ibyh_vo/?utm_source=ig_web_copy_link'
              }
            />
          </div>
          <div>
            <Tile
              photo={'/photos/kids-at-the-helm.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRm4FyVh3ut/?utm_source=ig_web_copy_link'
              }
            />

            <Tile
              photo={'/photos/cocapts.jpg'}
              iconSrc={
                'https://www.instagram.com/p/CRc8HFnBgH1/?utm_source=ig_web_copy_link'
              }
            />
          </div>
        </TileGrid>
      </Page>
    </Layout>
  );
};
