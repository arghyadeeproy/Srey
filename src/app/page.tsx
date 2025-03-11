'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CRTScreen from './components/CRTScren';

export default function Home() {
  const [showCRT, setShowCRT] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomingOut, setZoomingOut] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleShowCRT = () => {
    setIsZooming(true);
    setTimeout(() => {
      setShowCRT(true);
    }, 1000);
  };

  const handleHideCRT = () => {
    setShowButton(false);
    setZoomingOut(true);
    setTimeout(() => {
      setShowCRT(false);
      setIsZooming(false);
      setZoomingOut(false);
      setShowButton(true);
    }, 1000);
  };

  // Debug log to check states
  useEffect(() => {
    console.log('CRT is ' + (showCRT ? 'on' : 'off'));
  }, [showCRT]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main content with background */}
      <main
        className={`flex min-h-screen w-full flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
          isZooming && !zoomingOut ? 'scale-125' : 'scale-100'
        }`}
        style={{
          backgroundImage: 'url(/scene2-d14f31-compressed-da7d54.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Note: 'fixed' can cause issues on some mobile browsers; remove if needed
          backgroundAttachment: 'fixed',
          transformOrigin: 'center center',
          position: 'relative',
        }}
      >
        {/* CRT Screen - Only visible when CRT is on */}
        {showCRT && (
          <div className="crt-monitor-wrapper">
            <div className="crt-screen-container">
              <CRTScreen />
            </div>
          </div>
        )}

        {/* Power On Button - Only visible when CRT is off */}
        {!showCRT && (
          <div
            className="absolute cursor-pointer power-on-button"
            onClick={handleShowCRT}
          >
            <Image
              src="/crop-off-d1fca7.jpg"
              alt="Power On CRT"
              width={52}
              height={22}
              className="w-auto h-auto"
              priority
            />
          </div>
        )}
      </main>

      {/* Power Off Button - Only visible when CRT is on AND button is not hidden during transition */}
      {showCRT && showButton && (
        <div
          onClick={handleHideCRT}
          className="fixed cursor-pointer power-off-button"
        >
          <Image
            src="/crop-on-e8511a.jpg"
            alt="Power Off CRT"
            width={95}
            height={41}
            className="w-auto h-auto"
            priority
          />
        </div>
      )}

      {/* Add this style tag to handle the positioning responsively */}
      <style jsx global>{`
        /* CRT monitor wrapper - positions the screen in the monitor */
        .crt-monitor-wrapper {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 10;
        }

        /* CRT screen container - sizes and positions the actual CRT content */
        .crt-screen-container {
          position: relative;
          width: 93%; /* Adjust to fit perfectly within monitor frame */
          height: 77%;
          max-width: 800px; /* Set appropriate max dimensions */
          max-height: 600px;
          overflow: hidden;
          /* Position adjustments to center in the monitor */
          margin-top: 19.4%; /* Fine-tune vertical position */
          margin-left: 29.35%;
        }

        .power-on-button {
          position: absolute;
          z-index: 10;
          /* Base positioning for larger screens */
          margin-top: 340px;
          margin-left: 185px;
        }

        .power-off-button {
          position: fixed;
          z-index: 20;
          /* Base positioning for larger screens */
          bottom: calc(50% - 225px);
          right: calc(50% - 150px);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .crt-screen-container {
            width: 90%;
            height: 73%;
            margin-top: 100px;
          }

          .power-on-button {
            bottom: calc(50% - 150px);
            left: calc(50% - 23px);
            margin-top: 0;
            margin-left: 0;
          }

          .power-off-button {
            bottom: calc(50% - 110px);
            left: calc(50% - 40px);
            right: auto;
          }
        }

        @media (max-width: 640px) {
          .crt-screen-container {
            width: 20%;
            height: 70%;
            margin-top: -1.5%;
          }

          .power-on-button {
            bottom: calc(50% - 100px);
            left: calc(50% - 15px);
          }

          .power-off-button {
            bottom: calc(50% - 80px);
            left: calc(50% - 35px);
          }
        }
      `}</style>
    </div>
  );
}
