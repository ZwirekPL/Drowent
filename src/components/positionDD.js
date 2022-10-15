import { useEffect, useRef, useState } from 'react';

const usePosition = () => {
    const btnRef = useRef();
    const [xBtn, setXBtn] = useState();
    const [yBtn, setYBtn] = useState();
    const [widthBtn, setWidthBtn] = useState();
    const [heightBtn, setHeightBtn] = useState();
    const [finalX, setFinalX] = useState();
    const [finalY, setFinalY] = useState();
// This function calculate XBtn and YBtn
    const getPosition = () => {
    const xBtn = btnRef.current.offsetLeft;
    setXBtn(xBtn);
    const yBtn = btnRef.current.offsetTop;
    setYBtn(yBtn);
    const widthBtn = btnRef.current.offsetWidth;
    setWidthBtn(widthBtn);
    const heightBtn = btnRef.current.offsetHeight;
    setHeightBtn(heightBtn);
// This moves to right and bottom point 
    const finalX = (xBtn + widthBtn);
    setFinalX(finalX)
    const finalY = (yBtn + heightBtn);
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

    return { xBtn, yBtn, widthBtn, heightBtn, finalX, finalY, btnRef };
};

export default usePosition;