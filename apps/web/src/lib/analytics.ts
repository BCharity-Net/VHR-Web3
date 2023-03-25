import { IS_MAINNET } from 'data/constants';

const isBrowser = typeof window !== 'undefined';

/**
 * Simple Mixpanel
 */
export const Mixpanel = {
  track: (name: string, metadata?: Object) => {
    if (isBrowser) {
      try {
        if (!IS_MAINNET) {
          console.log('Mixpanel event', name, metadata);
        }
        (window as any)?.sa_event?.(name, metadata);
      } catch {
        console.error('Error while sending mixpanel event to simple mixpanel');
      }
    }
  }
};
