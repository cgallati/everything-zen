import { ReactNode } from 'react';
import { BaseLayout, MenuItem } from '@everything-zen/ui-components';

const menuItems: MenuItem[] = [
  { label: 'BOOK A CHARTER', relRoute: '/reserve' },
  { label: 'MANIFEST', relRoute: '/' },
];
export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseLayout menuItems={menuItems}>{children}</BaseLayout>;
};