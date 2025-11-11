import { useEffect, useState } from 'react';

export default function useUserAgent() {
  /**
   * we set our initial state as null because we don't know what the user agent is yet
   * that way we can check if the user agent has been set or not
   */
  const [isMobile, setIsMobile] = useState(null);
  const [userAgent, setUserAgent] = useState(null);
  const [isIOS, setIsIOS] = useState(null);
  const [isStandalone, setIsStandalone] = useState(null);
  const [userAgentString, setUserAgentString] = useState(null);

  useEffect(() => {
    if (window) {
      const userAgentStringFromWindow = window.navigator.userAgent;
      setUserAgentString(userAgentStringFromWindow);
      let currentUserAgent;

      /**
       * Parse user agent string to determine browser
       * The order of the if statements is important because some browsers
       * have multiple matches in their user agent string
       */
      if (userAgentString.indexOf('SamsungBrowser') > -1) {
        currentUserAgent = 'SamsungBrowser';
      } else if (userAgentString.indexOf('Firefox') > -1) {
        currentUserAgent = 'Firefox';
      } else if (userAgentString.indexOf('FxiOS') > -1) {
        currentUserAgent = 'FirefoxiOS';
      } else if (userAgentString.indexOf('CriOS') > -1) {
        currentUserAgent = 'ChromeiOS';
      } else if (userAgentString.indexOf('Chrome') > -1) {
        currentUserAgent = 'Chrome';
      } else if (userAgentString.indexOf('Safari') > -1) {
        currentUserAgent = 'Safari';
      } else {
        currentUserAgent = 'unknown';
      }
      setUserAgent(currentUserAgent);

      // Check if user agent is mobile
      const isIOSCheck = userAgentString.match(/iPhone|iPad|iPod/i);
      const isAndroid = userAgentString.match(/Android/i);
      setIsIOS(!!isIOSCheck);
      const isMobileCheck = isIOSCheck || isAndroid;
      setIsMobile(!!isMobileCheck);

      // Check if app is installed (if it's installed we wont show the prompt)
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsStandalone(true);
      }
    }
  }, []);

  return { isMobile, userAgent, isIOS, isStandalone, userAgentString };
}
