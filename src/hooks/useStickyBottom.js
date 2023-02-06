import { useEffect, useRef, useState } from "react";

const useStickyBottom = () => {
  const stickyRefBottom = useRef(null);
  const [stickyBottom, setStickyBottom] = useState(false);
  const [offset, setOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (!stickyRefBottom.current) {
      return;
    }
    setOffset(stickyRefBottom.current.offsetTop);
    setWindowHeight(window.innerHeight);
  }, [stickyRefBottom, setOffset, setWindowHeight]);
  const calculate = offset - windowHeight;
  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRefBottom.current) {
        return;
      }
      setStickyBottom(window.scrollY > calculate);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setStickyBottom, stickyRefBottom, offset, calculate]);
  return { stickyRefBottom, stickyBottom };
};

export default useStickyBottom;
