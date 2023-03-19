const DESCRIPTION =
  'Sit back and let us take the helm while you enjoy the harbor breeze. Reserve your private Charleston Harbor cruise today.';
const TITLE = 'Everything Zen Sailing Charters';
const TITLE_TEMPLATE = 'Everything Zen | %s';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  defaultTitle: TITLE,
  titleTemplate: TITLE_TEMPLATE,
  description: DESCRIPTION,
  canonical: 'https://ezsailingcharters.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezsailingcharters.com',
    site_name: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/low-battery.jpg',
        width: 1000,
        height: 714,
        alt: 'Place setting aboard Everything Zen cruising by the Charleston Battery.',
      },
    ],
  },
};
