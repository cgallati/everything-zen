import { Page } from '../Layout';
import { FAQs } from './content';
import { FAQ } from './FAQ';
import React, { useState } from 'react';
import { CTA, Endorsement } from '@everything-zen/ui-components';
import expertiseSVG from '../../public/expertise-charters-2022.svg';

export const FAQPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | undefined>(undefined);

  return (
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
      <CTA variant={'fat'} text={'CONTACT US'} route={'/contact'} />
      <CTA variant={'fat'} text={'CHARTERS & RATES'} route={'/charters'} />
      <Endorsement img={expertiseSVG} />
    </Page>
  );
};
