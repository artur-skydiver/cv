import { useCallback, useEffect, useState } from 'react';

type MediaType = 'mobile' | 'portrait' | 'landscape' | 'desktop';

type ResultType = {
  media: MediaType;
  isMobile: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
  isDesktop: boolean;
};

const MOBILE = 640;
const PORTRAIT = 960;
const LANDSCAPE = 1200;

const getMedia = (): MediaType => {
  const width = window.innerWidth;
  if (width < MOBILE) {
    return 'mobile';
  } else if (width >= MOBILE && width < PORTRAIT) {
    return 'portrait';
  } else if (width >= PORTRAIT && width < LANDSCAPE) {
    return 'landscape';
  }
  return 'desktop';
};

const useMedia = (): ResultType => {
  const [result, setResult] = useState<MediaType>(getMedia());

  const onResize = useCallback(() => setResult(getMedia()), []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    media: result,
    isMobile: result === 'mobile',
    isPortrait: result === 'portrait',
    isLandscape: result === 'landscape',
    isDesktop: result === 'desktop',
  };
};

export default useMedia;
