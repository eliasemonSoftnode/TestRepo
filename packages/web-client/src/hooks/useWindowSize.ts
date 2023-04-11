import { useEffect, useState } from 'react';

interface WindowSizeProps {
  initialWidth: number;
  initialHeight: number;
}

export interface WindowSize extends WindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = ({
  initialWidth,
  initialHeight,
}: WindowSizeProps): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    initialWidth,
    initialHeight,
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        initialWidth,
        initialHeight,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [initialWidth, initialHeight]);

  return windowSize;
};

export default useWindowSize;
