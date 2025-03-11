import React from 'react';

interface DesktopIconsProps {
  icons: { id: string; label: string; src: string }[];
  onIconClick: (id: string) => void;
  iconSize?: { width: number; height: number };
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ 
  icons, 
  onIconClick, 
  iconSize = { width: 30, height: 30 } 
}) => {
  // Determine text size based on icon size
  const getTextSize = () => {
    if (iconSize.width <= 10) return 'text-[6px]';
    if (iconSize.width <= 25) return 'text-[9px]';
    return 'text-xs';
  };

  // Determine item width based on icon size
  const getItemWidth = () => {
    if (iconSize.width <= 10) return 'w-10';
    if (iconSize.width <= 25) return 'w-16';
    return 'w-20';
  };

  return (
    <div className="flex flex-col items-start w-full gap-1.5 p-0.5">
      {icons.map((icon) => (
        <div 
          key={icon.id} 
          className={`flex flex-col items-center cursor-pointer ${getItemWidth()}`} 
          onClick={() => onIconClick(icon.id)}
        >
          <img 
            src={icon.src} 
            alt={icon.label} 
            width={iconSize.width} 
            height={iconSize.height} 
            className="object-contain"
          />
          <span className={`text-white ${getTextSize()} crt-text mt-0.5 text-center line-clamp-2`}>
            {icon.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;