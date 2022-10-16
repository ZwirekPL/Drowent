import { useEffect, useRef, useState } from 'react';

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
    const middleEl = (widthEl/2)
    const middleElSecond = (widthElSecond/2)
    const finalX = ((fromLeftEl + middleEl)-(middleElSecond));
    setFinalX(finalX)

    const finalY = (fromTopEl + heightEl);
    setFinalY(finalY)
    };
// Get the position of the first element
    useEffect(() => {
    getPosition();
    }, []);

// Re-calculate position of the element when the window is resized and scrolled by the user
    useEffect(() => {
    window.addEventListener("resize", getPosition);
    window.addEventListener("click", getPosition);
    window.addEventListener('scroll', getPosition);
        return () => window.removeEventListener('scroll', getPosition);
    }, []);

    return { elRef, elSecondRef, fromLeftEl, fromTopEl, widthEl, heightEl,finalY, finalX, widthElSecond};
};
export default usePosition;