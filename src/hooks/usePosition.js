import { useEffect, useRef, useState } from "react";

const usePosition = () => {
  const elRef = useRef();
  const elSecondRef = useRef();

  const [fromLeftEl, setFromLeftEl] = useState();
  const [fromTopEl, setFromTopEl] = useState();
  const [widthEl, setWidthEl] = useState();
  const [heightEl, setHeightEl] = useState();
  const [widthElSecond, setWidthElSecond] = useState();

  const [finalX, setFinalX] = useState();
  const [finalY, setFinalY] = useState();
  // This function calculates the position underneath the element and centering it with respect to the other element

  const getPosition = () => {
    if (elRef.current && elSecondRef.current) {
      const fromLeftEl = elRef.current.offsetLeft;
      setFromLeftEl(fromLeftEl);
      const fromTopEl = elRef.current.offsetTop;
      setFromTopEl(fromTopEl);
      const widthEl = elRef.current.offsetWidth;
      setWidthEl(widthEl);
      const heightEl = elRef.current.offsetHeight;
      setHeightEl(heightEl);
      const widthElSecond = elSecondRef.current.offsetWidth;
      setWidthElSecond(widthElSecond);
      const middleEl = widthEl / 2;
      const middleElSecond = widthElSecond / 2;
      const finalX = fromLeftEl + middleEl - middleElSecond;
      setFinalX(finalX);
      const finalY = fromTopEl + heightEl;
      setFinalY(finalY);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getPosition, { passive: true });
    window.addEventListener("click", getPosition);
    window.addEventListener("scroll", getPosition, { passive: true });

    // Call once on initial component render
    getPosition();

    // Return cleanup function to remove all listener callbacks!
    return () => {
      window.removeEventListener("resize", getPosition, { passive: true });
      window.removeEventListener("click", getPosition);
      window.removeEventListener("scroll", getPosition, { passive: true });
    };
  }, []);

  return {
    elRef,
    elSecondRef,
    fromLeftEl,
    fromTopEl,
    widthEl,
    heightEl,
    finalY,
    finalX,
    widthElSecond,
  };
};

export default usePosition;
