import Link from 'next/link';
import { SideBar } from './styles';
import { NextRouter, useRouter } from 'next/router';
import { ReactNode } from 'react';

type NavLinkProps = {
  relRoute: string;
  children?: ReactNode;
  router: NextRouter;
};
export type MenuItem = {
  label: string;
  relRoute: string;
};

type MenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
  menuItems: MenuItem[];
};

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen, menuItems }) => {
  const router = useRouter();

  const handleItemClick = (route: string) => (_: any) => {
    if (router.route === route) {
      setIsOpen(false);
    }
  };

  const NavLink: React.FC<NavLinkProps> = ({ relRoute, children, router }) =>
    relRoute === router.route ? (
      <>{children}</>
    ) : (
      <Link href={relRoute} key={relRoute}>
        {children}
      </Link>
    );

  return (
    <SideBar open={isOpen}>
      <ul>
        {menuItems.map(({ label, relRoute }) => (
          <NavLink relRoute={relRoute} router={router} key={relRoute}>
            <li onClick={handleItemClick(relRoute)}>
              <h2>{label}</h2>
            </li>
          </NavLink>
        ))}
      </ul>
    </SideBar>
  );
};
