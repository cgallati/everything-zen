const DESCRIPTION =
  'Discover the thrill of catamaran sailing with Everything Zen Sailing Charters – your gateway to unforgettable Charleston harbor adventures. Experience luxury and relaxation on our private cruises, where scenic views and gentle breezes await. Book your exclusive Charleston sailing charter today!';
const TITLE = 'Everything Zen Sailing Charters';
const TITLE_TEMPLATE = 'Everything Zen | %s';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  defaultTitle: TITLE,
  titleTemplate: TITLE_TEMPLATE,
  description: DESCRIPTION,
  canonical: 'https://everythingzensailingcharters.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://everythingzensailingcharters.com',
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
