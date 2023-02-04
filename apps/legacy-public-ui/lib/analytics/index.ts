// log the pageview with their URL
export const pageview = (url: string): void => {
  window.gtag('config', 'G-5WTR2LEY43', {
    page_path: url,
  });
};

// log specific events happening.
export const analyticsEvent = ({ action, params }): void => {
  window.gtag('event', action, params);
};
