import { Layout, Page } from '../Layout';
import { FAQs } from './content';
import { FAQ } from './FAQ';
import React, { FC, useState } from 'react';
import { AnchorCTA } from '@everything-zen/ui-components';

export const FAQPage: FC<{bannerText?: string}> = ({bannerText}) => {
  const [expanded, setExpanded] = useState<number | undefined>(undefined);

  return (
    <Layout bannerText={bannerText}>
      <Page title={'FREQUENTLY ASKED QUESTIONS'}>
        {FAQs.map((faq, idx) => (
          <FAQ
            key={idx}
            {...faq}
            isOpen={idx === expanded}
            toggleOpen={
              idx === expanded
                ? () => setExpanded(undefined)
                : () => setExpanded(idx)
            }
          />
        ))}
        <br />
        <AnchorCTA route={'/contact'}>CONTACT US</AnchorCTA>
        <AnchorCTA route={'/charters'}>CHARTERS & RATES</AnchorCTA>
        {/*<Endorsement img={expertiseSVG} />*/}
      </Page>
    </Layout>
  );
};
