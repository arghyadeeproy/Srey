import React from 'react';

interface WindowProps {
  title: string;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ title, onClose }) => {
  return (
    <div className="w-64 bg-gray-900 border border-gray-400 text-white shadow-lg z-60">
      {/* The `.handle` class allows dragging */}
      <div className="flex justify-between bg-gray-700 p-2 cursor-move handle">
        <span className="text-sm crt-text">{title.toUpperCase()}</span>
        <button onClick={onClose} className="text-red-500">✖</button>
      </div>
      <div className="p-4 text-xs crt-text">This is the {title} window.</div>
    </div>
  );
};

export default Window;
