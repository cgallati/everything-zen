import { Paragraph } from '@everything-zen/ui-components';
import React from 'react';
import {
  MarjoramLogo,
  CCCLogo,
  Heading, MarjoramSection,
  MenuCTA,
  PaddedAnchor, MarjoramHeading
} from './styles';
import { Layout, Page } from '../Layout';

export const CateringPage = () => {
  return (
    <Layout>
      <Page title={'special catering'}>
        <Paragraph>
          To make your catering arrangements, we ask our charter guests to
          contact our partners directly. This will prevent confusion and give
          you control over verification and payment. As always, we are happy to
          to answer any questions or concerns regarding your catering plans for
          the charter.
        </Paragraph>
        <MarjoramHeading>MARJORAM CUISINE</MarjoramHeading>
        {/*<MarjoramSection>*/}
            <MarjoramLogo src={'/marjoram-logo.png'} />
          <Paragraph>
            We've collaborated with private Chef Mari Jo Ramie to offer a custom
            menu for your sail around Charleston Harbor. Through her locally renowned
            catering outfit, Marjoram Cuisine, she offers a wide selection of southern
            classics, decadent seafood mains, and fresh, modern snacks and desserts. For
            an added fee, invite Chef Mari along for the sail so she can prep, clean,
            and take everything down after so you don’t have to lift a finger!
          </Paragraph>
        {/*</MarjoramSection>*/}
          {/*<PaddedAnchor*/}
          {/*  href={*/}
          {/*    'https://www.marjoramcuisine.com/_files/ugd/3b2d2b_517cc90288c04f55be1c44f6c58fc695.pdf'*/}
          {/*  }*/}
          {/*  target={'_blank'}*/}
          {/*  rel="noreferrer"*/}
          {/*>*/}
          {/*  <MenuCTA>VIEW MENU</MenuCTA>*/}
          {/*</PaddedAnchor>*/}
          <PaddedAnchor
            href={
              'https://www.marjoramcuisine.com/everything-zen-collaboration'
            }
            target={'_blank'}
            rel="noreferrer"
          >
            <MenuCTA>MORE INFO</MenuCTA>
          </PaddedAnchor>
        <Heading>YOUR CHARCUTERIE BOARD AWAITS</Heading>
        <Paragraph>
          There is nothing more elegant than snacking on a charcuterie board while
          under sail. Everything Zen Sailing is happy to provide you with two options
          for your group, which includes cheese and meet selections along with
          crackers, nuts, and fruit. Contact Everything Zen Sailing to make arrangements.
          <br/>
          <br/>
          1) Large, serves 4-6 guests. $110
          <br/>
          2) Medium, serves 2-4 guests. $85
        </Paragraph>
      </Page>
    </Layout>
  );
};
