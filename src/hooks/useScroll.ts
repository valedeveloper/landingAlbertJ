import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScroll, setIsScroll] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const limitLonguitude = 3000
      setIsScroll(window.pageYOffset >= limitLonguitude);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScroll };
};
