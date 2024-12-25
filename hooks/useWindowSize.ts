import { useState, useEffect } from "react";
const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return windowWidth;
};
export default useWindowWidth;
