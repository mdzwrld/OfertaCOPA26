'use client';

// lib/fpixel.ts
export const FB_PIXEL_ID = '3146095315573742';

declare global {
  interface Window {
    fbq: (
      type: 'track',
      eventName: string,
      payload?: Record<string, any>
    ) => void;
  }
}

/**
 * `pageview` is triggered automatically with the base pixel code.
 * If you're using Next.js with App Router, you might need to trigger it manually on navigation.
 * A helper component can be created for this.
 */
export const pageview = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

/**
 * Generic event tracker
 */
export const event = (name: string, options: Record<string, any> = {}) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, options);
  }
};

/**
 * Track a purchase event
 * https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking#purchase-event
 */
export const trackPurchase = (value: number, currency: string) => {
  event('Purchase', { value, currency });
};

/**
 * Track an AddToCart event
 * https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking#add-to-cart-event
 */
export const trackAddToCart = (params: {
    content_ids?: string[], 
    content_name?: string,
    content_type?: string,
    value?: number,
    currency?: string
}) => {
  event('AddToCart', params);
};

/**
 * Track a ViewContent event
 * https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking#view-content-event
 */
export const trackViewContent = (params: {
    content_ids?: string[],
    content_name?: string,
    content_type?: string,
    value?: number,
    currency?: string
}) => {
  event('ViewContent', params);
};
