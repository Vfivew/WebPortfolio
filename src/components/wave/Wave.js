import React, { useEffect, useRef } from 'react';
import "./wave.css"

const Wave = () => {
    const waveRefOne = useRef(null);
    const waveRefTwo = useRef(null);
    const waveRefThree = useRef(null);

    useEffect(() => {
        if (waveRefOne.current && waveRefTwo.current && waveRefThree.current) {
            const width = waveRefOne.current.clientWidth; 
            waveRefOne.current.style.height = `${width}px`;
            waveRefTwo.current.style.height = `${width}px`;
            waveRefThree.current.style.height = `${width}px`;
        }
    }, []);

    return (
        <div className="audiobox">
            <div className="wave one" ref={waveRefOne}></div>
            <div className="wave two" ref={waveRefTwo}></div>
            <div className="wave three" ref={waveRefThree}></div>
        </div>
    );
};

export default Wave;