"use client";

import React from "react";
import Draggable from "react-draggable";

interface WindowProps {
  title: string;
  onClose: () => void;
}

const Window = ({ title, onClose }: WindowProps) => {
  return (
    <Draggable handle=".handle">
      <div className="w-[300px] h-[200px] border border-white bg-gray-200 relative font-mono shadow-lg overflow-hidden">
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-blue-900 text-white pl-2 text-xs handle cursor-move">
          <span className="">{title}</span>
          <button
            onClick={onClose}
            className="bg-gray-600 border-l border-white text-black px-1"
          >
            ✖
          </button>
        </div>

        {title === "documents" ? (
          <>
            <div className="flex items-center bg-gray-400 text-white text-xs handle cursor-move border-t border-b border-white">
              <span className="border-r border-white px-1">🔙</span>
              <span className="border-r border-white px-1">🏠︎</span>
              <span className="px-2">C:\Documents\</span>
            </div>
            <div className="bg-gray-300 p-2 text-xs h-full flex">
              <div className="">
                <img
                  src="https://de34i7k6qwgwc.cloudfront.net/uploads/img/folder-d42ea2.png"
                  alt="Folder"
                  className="w-8 h-8 mr-2"
                />
                <span className="">Day 1</span>
              </div>
              <div className="">
                <img
                  src="https://de34i7k6qwgwc.cloudfront.net/uploads/img/folder-d42ea2.png"
                  alt="Folder"
                  className="w-8 h-8 mr-2"
                />
                <span className="">Day 2</span>
              </div>
            </div>
          </>
        ) : title === "aboutus" ? (
          <div className="p-4 text-xs text-gray-800 overflow-y-auto h-full">
            <h2 className="text-blue-900 font-bold text-sm">🚀 St. Thomas College proudly presents</h2>
            <h3 className="text-red-600 font-bold text-sm">SREY 2K25 🎉</h3>
            <p className="mt-2">
              Kolkata's premier on-campus tech festival. 💡🔥
            </p>
            <p className="mt-1">
              This immersive experience offers a dynamic platform for aspiring innovators and tech enthusiasts. 🛠️🤖
            </p>
            <p className="mt-1">
              Engage in thought-provoking events, insightful interactions, and electrifying competitions designed to challenge and inspire. 🎯⚡
            </p>
            <p className="mt-1">
              Network with knowledgeable minds, connect with fellow tech aficionados, and gain firsthand exposure to cutting-edge advancements. 🌐👨‍💻
            </p>
            <p className="mt-1 font-bold">
              Join us and be wired, inspired, and empowered! 🔥✨
            </p>
          </div>
        ) : (
          <div className="text-red-600 font-bold p-3">❌ Access Denied: Invalid Folder</div>
        )}
      </div>
    </Draggable>
  );
};

export default Window;