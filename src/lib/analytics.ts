export type ConversionEvent =
  | 'cta_click'
  | 'initiate_checkout'
  | 'lead_trial_requested'
  | 'contact_form_submitted'
  | 'view_pricing'
  | 'faq_expanded'
  | 'channel_filter_changed';

export function trackEvent(eventName: ConversionEvent, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    const eventPayload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params
    };

    // Push to Google Tag Manager dataLayer if available
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push(eventPayload);
    }

    // Trigger custom window event for integrations
    window.dispatchEvent(new CustomEvent('iptv_conversion_event', { detail: eventPayload }));

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}:`, eventPayload);
    }
  }
}

