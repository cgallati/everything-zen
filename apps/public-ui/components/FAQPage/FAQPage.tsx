import { Layout, Page } from '../Layout';
import { FAQs } from './content';
import { FAQ } from './FAQ';
import React, { useState } from 'react';
import { AnchorCTA, CTA, Endorsement } from '@everything-zen/ui-components';
import expertiseSVG from '../../public/expertise-charters-2022.svg';

export const FAQPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | undefined>(undefined);

  return (
    <Layout>
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
        <Endorsement img={expertiseSVG} />
      </Page>
    </Layout>
  );
};
