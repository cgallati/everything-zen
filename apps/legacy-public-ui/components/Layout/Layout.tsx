import { ReactNode } from 'react';
import { BaseLayout, MenuItem } from '@everything-zen/ui-components';

const menuItems: MenuItem[] = [
  { label: 'BOOK A CHARTER', relRoute: '/reserve' },
  { label: 'CHARTERS & RATES', relRoute: '/charters' },
  { label: 'SPECIAL OCCASIONS', relRoute: '/special-occasions' },
  { label: 'OUR STORY', relRoute: '/story' },
  { label: 'FAQ', relRoute: '/faq' },
  { label: 'CONTACT US', relRoute: '/contact' },
  { label: 'CATERING', relRoute: '/catering' },
  { label: 'HOME', relRoute: '/' },
];

const footerItems = [
  { label: 'CHARTERS & RATES', relRoute: '/charters' },
  { label: 'CATERING', relRoute: '/catering' },
  { label: 'SPECIAL OCCASIONS', relRoute: '/special-occasions' },
  { label: 'OUR STORY', relRoute: '/story' },
  { label: 'FAQ', relRoute: '/faq' },
  { label: 'CONTACT US', relRoute: '/contact' },
];
export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseLayout menuItems={menuItems}>{children}</BaseLayout>;
};
