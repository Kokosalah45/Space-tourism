import { useEffect, useRef } from 'react';
import { useWindowSizeStore } from '../global-state';

type x = { windowSize?: number; setWindowSize?: (x: number) => void };

const useWindowSize = () => {
  const { setWindowSize }: x = useWindowSizeStore((state) => state);
  useEffect(() => {
    const windowResizeListener = window.addEventListener('resize', (e) => {
      if (window.innerWidth < 640) {
        setWindowSize?.(0);
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setWindowSize?.(1);
      } else {
        setWindowSize?.(2);
      }
    });
    return () => windowResizeListener;
  }, []);
};
export default useWindowSize;
