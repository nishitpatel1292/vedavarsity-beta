export const FB_PIXEL_ID = '504360957706830';

export const pageview = () => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView');
  } else {
    console.warn('Facebook Pixel not initialized');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', name, options);
  } else {
    console.warn('Facebook Pixel not initialized');
  }
};
