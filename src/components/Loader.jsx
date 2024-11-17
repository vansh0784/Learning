import React, { useEffect, useState } from "react";
import logo1 from "../assets/logoNew1.png";
const Loader = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev === 100) {
          clearInterval(interval);
        }
        return Math.min(prev + 5, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader">
      <div className="video-container">
        <video autoPlay loop muted src="https://pin.it/2te6k0Az7"></video>
      </div>
      <div className="text-container">
        <img className="logonew1" src={logo1} alt="logo" />
        <p id="titleload">Dil Se Dine</p>
        <div id="progress">
          <div
            id="progress-bar"
            style={{ width: `${loadingPercentage}%` }}
          ></div>
        </div>
        <p id="percentage">{loadingPercentage}%</p>
      </div>
    </div>
  );
};

export default Loader;
