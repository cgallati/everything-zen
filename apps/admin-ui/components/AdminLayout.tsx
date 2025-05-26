import { ReactNode } from 'react';
import { BaseLayout, MenuItem } from '@everything-zen/ui-components';

const menuItems: MenuItem[] = [
  { label: 'MANAGE AVAILABILITY', relRoute: '/availability' },
  { label: 'BOOK A CHARTER', relRoute: '/reserve' },
  { label: 'MANIFEST', relRoute: '/' },
  { label: 'CHARTER TYPES', relRoute: '/charters' },
  { label: 'PAYMENT LINKS', relRoute: '/payment-link' },
];
export const AdminLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <BaseLayout menuItems={menuItems}>{children}</BaseLayout>;
};
