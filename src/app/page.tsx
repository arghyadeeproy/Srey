'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CRTScreen from './components/CRTScren';

export default function Home() {
  const [showCRT, setShowCRT] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const zoomDuration = 1000; // Animation duration in ms

  const handleShowCRT = () => {
    // First turn on CRT
    setTimeout(() => {
      setShowCRT(true);
      
      // Then show the power off button after zoom animation completes
      setTimeout(() => {
        setShowButton(true);
      }, zoomDuration);
    }, 1000);
  };

  const handleHideCRT = () => {
    // Hide button immediately when clicked
    setShowButton(false);
    
    // Then turn off CRT after a delay
    setTimeout(() => {
      setShowCRT(false);
      
      // No need to set showButton to true here since it will only be shown
      // after CRT is turned on and zoom animation completes
    }, 1000);
  };

  // Debug log to check states
  useEffect(() => {
    console.log('CRT is ' + (showCRT ? 'on' : 'off'));
    console.log('Button is ' + (showButton ? 'visible' : 'hidden'));
  }, [showCRT, showButton]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Main content with background */}
      <main
        className="flex min-h-screen w-full flex-col items-center justify-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: 'url(/scene2-d14f31-compressed-da7d54.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Note: 'fixed' can cause issues on some mobile browsers; remove if needed
          backgroundAttachment: 'fixed',
          transformOrigin: 'center center',
          position: 'relative',
          transform: showCRT ? 'scale(1.8)' : 'scale(1)', // Add zoom effect
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
            style={{
              position: 'absolute',
              zIndex: 10,
              marginTop: '340px',
              marginLeft: '185px',
            }}
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

      {/* Power Off Button - Only visible when CRT is on AND button visibility is set to true */}
      {showCRT && showButton && (
        <div
          onClick={handleHideCRT}
          className="fixed cursor-pointer power-off-button"
        >
          <Image
            src="/crop-on-e8511a.jpg"
            alt="Power Off CRT"
            width={100}
            height={150}
            className="transparent-button"
            priority
          />
        </div>
      )}

      {/* Add this style tag to handle the positioning responsively */}
      <style jsx global>{`
        /* CRT monitor wrapper - positions the screen in the monitor */
        .crt-monitor-wrapper {
          position: fixed;
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
          bottom: calc(50% - 330px);
          right: calc(50% - 230px);
          /* Add fade-in animation */
          animation: fadeIn 0.5s ease-in-out;
        }

        /* Make the button transparent */
        .transparent-button {
          opacity: 0; /* 50% transparent - adjust value between 0-1 as needed */
          transition: opacity 0s ease; /* Smooth transition for hover effect */
        }
        
        .transparent-button:hover {
          opacity: 0; /* More visible on hover for better UX */
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0; } /* Match the transparency level */
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
