import { useEffect, useRef, useState } from 'react';

const usePositionY = () => {
    const elRef = useRef();
// const elSecondRef = useRef();
    
    const [fromLeftEl, setFromLeftEl] = useState();
    const [fromTopEl, setFromTopEl] = useState();
    const [widthEl, setWidthEl] = useState();
    const [heightEl, setHeightEl] = useState();
    // const [fromLeftElSecond, setFromLeftElSecond] = useState();
    // const [fromTopElSecond, setFromTopElSecond] = useState();
    // const [widthElSecond, setWidthElSecond] = useState();
    // const [heightElSecond, setHeightElSecond] = useState();
    // const [middleEl, setMiddleEl] = useState();
    // const [middleElSecond, setMiddleElSecond] = useState();
    

    // const [finalX, setFinalX] = useState();
    const [finalY, setFinalY] = useState();
// This function calculate point of left, top, width and height first element
    const getPosition = () => {
// This function calculate point of left, top, width and height first element
    const fromLeftEl = elRef.current.offsetLeft;
    setFromLeftEl(fromLeftEl);
    const fromTopEl = elRef.current.offsetTop;
    setFromTopEl(fromTopEl);
    const widthEl = elRef.current.offsetWidth;
    setWidthEl(widthEl);
    const heightEl = elRef.current.offsetHeight;
    setHeightEl(heightEl);
// This function calculate point of left, top, width and height second element
    // const fromLeftElSecond = elSecondRef.current.offsetLeft;
    // setFromLeftElSecond(fromLeftElSecond);
    // const fromTopElSecond = elSecondRef.current.offsetTop;
    // setFromTopElSecond(fromTopElSecond);
    // const widthElSecond = elSecondRef.current.offsetWidth;
    // setWidthElSecond(widthElSecond);
    // const heightElSecond = elSecondRef.current.offsetHeight;
    // setHeightElSecond(heightElSecond);
// This function calulate middle of the first element
//     const middleEl = (widthEl / 2);
//     setMiddleEl(middleEl);

// // This function calulate middle of the second element
//     const middleElSecond = (widthElSecond / 2);
//     setMiddleElSecond(middleElSecond);

// This calculate final Y position 
    // const finalX = (fromLeftEl + widthEl);
    // setFinalX(finalX)

    const finalY = (fromTopEl + heightEl);
    setFinalY(finalY)
    };
// Get the position of the red box in the beginning
    useEffect(() => {
    getPosition();
    }, []);

// Re-calculate X and Y of the red box when the window is resized and scrolled by the user
    useEffect(() => {
    window.addEventListener("resize", getPosition);
    window.addEventListener('scroll', getPosition);
        return () => window.removeEventListener('scroll', getPosition);
    }, []);

    return { fromLeftEl, fromTopEl, widthEl, heightEl,finalY, elRef, };
};
// fromLeftElSecond, fromTopElSecond, widthElSecond, heightElSecond, middleEl, middleElSecond, finalX, 
export default usePositionY;