import { ContactUsPage } from '../components/ContactUsPage/ContactUsPage';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { fetchBanner } from '../lib/content/contentfulPosts';

const Contact: NextPage = ({bannerText}: {bannerText?: string}) => {
  return (
    <>
      <NextSeo
        title={'CONTACT US'}
        description={
          'Get in touch to schedule your private sailboat charter in Charleston.'
        }
        canonical={'https://everythingzensailingcharters.com/contact'}
      />
      <ContactUsPage bannerText={bannerText} />
    </>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {
      bannerText: bannerText
    },
  };
}
