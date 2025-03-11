'use client';

import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import DesktopIcons from './CRT/DesktopIcons';
import Window from './CRT/Window';
import GlitchEffect from './Effects/GlitchEffect';
import InterlaceEffect from './Effects/InterlaceEffect';
import RGBShiftEffect from './Effects/RGBShiftEffect';
import { icons } from './constants/icons';
import './styles/animations.css';

const CRTScreen = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [screenDimensions, setScreenDimensions] = useState({ width: 350.98, height: 263.99 });
  const [iconSize, setIconSize] = useState({ width: 30, height: 30 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) { // Mobile devices
        setScreenDimensions({ width: 263.55, height: 197.2 });
        setIconSize({ width: 18, height: 18 });
      } else if (width < 1024) { // Tablets
        setScreenDimensions({ width: 320, height: 240 });
        setIconSize({ width: 25, height: 25 });
      } else { // Desktops
        setScreenDimensions({ width: 350.98, height: 263.99 });
        setIconSize({ width: 30, height: 30 });
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleWindow = (id: string) => {
    setOpenWindows((prev) =>
      prev.includes(id) ? prev.filter((win) => win !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="relative border-[0px] border-gray-700 shadow-lg overflow-hidden flex flex-col items-center justify-center crt-screen rounded-lg"
      style={{
        width: `${screenDimensions.width}px`,
        height: `${screenDimensions.height}px`,
        backgroundImage: 'url(https://de34i7k6qwgwc.cloudfront.net/uploads/img/background-computer-d0f45e.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <GlitchEffect />
      <InterlaceEffect />
      <RGBShiftEffect />

      {/* Render Windows */}
      {openWindows.map((win) => (
        <Draggable key={win} handle=".handle" defaultPosition={{ x: 10, y: 10 }}>
          <div className="absolute">
            <Window title={win} onClose={() => toggleWindow(win)} />
          </div>
        </Draggable>
      ))}

      <DesktopIcons icons={icons} onIconClick={toggleWindow} iconSize={iconSize} />
    </div>
  );
};

export default CRTScreen;
