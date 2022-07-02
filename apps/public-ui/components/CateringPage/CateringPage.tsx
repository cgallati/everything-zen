import { Paragraph, Page } from '@everything-zen/ui-components';
import React from 'react';
import {
  CaviarAndBananasLogo,
  CCCLogo,
  Heading,
  MenuCTA,
  PaddedAnchor,
} from './styles';

export const CateringPage = () => {
  return (
    <Page title={'special catering'}>
      <Paragraph>
        To make your catering arrangements, we ask our charter guests to contact
        our partners directly. This will prevent confusion and give you control
        over verification and payment. As always, we are happy to to answer any
        questions or concerns regarding your catering plans for the charter.
      </Paragraph>
      <CaviarAndBananasLogo src={'/c&b.jpg'} />
      <Heading>FRESH GOURMET-TO-GO CATERING</Heading>
      <Paragraph>
        We believe in making your experience onboard as smooth-sailing as
        possible, which is why we are proud to partner with Caviar & Bananas to
        provide you and your guests with catering options that are sure to
        please everyone. They deliver right to our boat and make the catering
        process seamless. Gluten-free options available.
      </Paragraph>
      <PaddedAnchor
        href={
          'https://www.caviarandbananas.com/assets/pdfs/menus/catering/catering_maritime.pdf'
        }
        target={'_blank'}
        rel="noreferrer"
      >
        <MenuCTA>VIEW MENU</MenuCTA>
      </PaddedAnchor>
      <CCCLogo src={'/ccc-logo.png'} />
      <Heading>CHARCUTERIE BOARD HEAVEN</Heading>
      <Paragraph>
        There is nothing more elegant than snacking on a charcuterie board while
        sailing, and our local business Classy Cheese Chic does it the best. The
        owner, Caitlyn, creates the most beautifully done boards that are
        guaranteed to add charm to your sail. They’re also incredibly fresh and
        delicious.
      </Paragraph>
      <PaddedAnchor
        href={'https://classycheesechic.com/collections'}
        target={'_blank'}
        rel="noreferrer"
      >
        <MenuCTA>VIEW MENU</MenuCTA>
      </PaddedAnchor>
    </Page>
  );
};
