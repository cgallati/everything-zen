import { ReactNode } from 'react';
import { BaseLayout, MenuItem } from '@everything-zen/ui-components';
import React from 'react';

const menuItems: MenuItem[] = [
  { label: 'BOOK A CHARTER', relRoute: '/reserve' },
  { label: 'CHARTERS & RATES', relRoute: '/charters' },
  { label: 'UPDATES', relRoute: '/feed' },
  { label: 'SPECIAL OCCASIONS', relRoute: '/special-occasions' },
  { label: 'OUR STORY', relRoute: '/story' },
  { label: 'FAQ', relRoute: '/faq' },
  { label: 'CONTACT US', relRoute: '/contact' },
  { label: 'CATERING', relRoute: '/catering' },
  { label: 'HOME', relRoute: '/' },
];

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseLayout menuItems={menuItems}>{children}</BaseLayout>;
};
