import React, { useEffect, useRef } from "react";
import "./wave.css";

const Wave = () => {
  const waveRefOne = useRef(null);
  const waveRefTwo = useRef(null);
  const waveRefThree = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        entry.target.style.height = `${width}px`;
      }
    });

    if (waveRefOne.current && waveRefTwo.current && waveRefThree.current) {
      resizeObserver.observe(waveRefOne.current);
      resizeObserver.observe(waveRefTwo.current);
      resizeObserver.observe(waveRefThree.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
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
