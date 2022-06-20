// log the pageview with their URL
export const pageview = (url: string): void => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const analyticsEvent = ({ action, params }): void => {
  window.gtag('event', action, params);
};
