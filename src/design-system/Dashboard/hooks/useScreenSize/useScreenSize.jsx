import { useState, useEffect } from 'react';

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getWindowSize);

  const handleResize = () => {
    setScreenSize(getWindowSize);
  };

  useEffect(() => {
    setScreenSize(getWindowSize);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []); // Empty dependency array to run the effect only once on mount

  return screenSize;
};
