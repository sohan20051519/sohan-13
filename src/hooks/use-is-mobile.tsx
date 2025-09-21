import { useState, useEffect } from 'react';

export function useIsMobile(query: string = '(max-width: 768px)') {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial value
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [query]);

  return isMobile;
}
