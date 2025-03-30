import React, { useState, useEffect } from 'react';
import Bike from '../Images/Bike.jpg';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getFontSize = () => {
    if (windowWidth < 500) return '1.25rem';
    if (windowWidth < 800) return '1.5rem';
    return '2rem';
  };

  const getBackgroundStyle = () => {
    const aspectRatio = windowWidth / windowHeight;
    return {
      backgroundImage: `url(${Bike})`,
      backgroundSize: aspectRatio > 1 ? '100% auto' : 'auto 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: '100vh', 
      width: windowWidth <500 ? '100%' : "auto",
    };
  };

  return (
    <div style={getBackgroundStyle()}>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -25%)', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '12px' }}>
        <h1 style={{ fontSize: getFontSize(), marginBottom: '0.5rem' }}>Bikers MotorCycle Towing</h1>
        <h1 style={{ fontSize: getFontSize(), marginBottom: '0.5rem' }}>Open 24/7</h1>
        <h1 style={{ fontSize: getFontSize(), marginBottom: '0.5rem' }}>Call: (516) 749-1314</h1>
        <h1 style={{ fontSize: getFontSize() }}>Serving South Florida</h1>
      </div>
    </div>
  );
};

export default Home;
