import { ContactUsPage } from '../components/ContactUsPage/ContactUsPage';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'CONTACT US'}
        description={
          'Get in touch to schedule your private sailboat charter in Charleston.'
        }
        canonical={'https://everythingzensailingcharters.com/contact'}
      />
      <ContactUsPage />
    </>
  );
};

export default Contact;
