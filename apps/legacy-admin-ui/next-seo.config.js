const DESCRIPTION =
  "Manage Everything Zen's availability and review reservations.";
const TITLE = 'Everything Zen | Crew Portal';

export default {
  title: TITLE,
  description: DESCRIPTION,
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
