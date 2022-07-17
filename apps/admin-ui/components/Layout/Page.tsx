import { PageHeading } from '@everything-zen/ui-components';
import { PageWrapper } from './styles';
import { Footer } from './Footer';

type PageProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <PageWrapper>
        {title && <PageHeading>{title.toUpperCase()}</PageHeading>}
        {children}
      </PageWrapper>
      <Footer />
    </>
  );
};
