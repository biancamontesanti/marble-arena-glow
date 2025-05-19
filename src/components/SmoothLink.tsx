import React from 'react';
import useNavigateAndScroll from '@/hooks/useNavigateAndScroll';

interface SmoothLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick,
  ...rest 
}) => {
  const navigateAndScroll = useNavigateAndScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call the provided onClick if it exists
    if (onClick) {
      onClick(e);
    }
    
    // Special handling for live page to ensure the video is centered in the viewport
    if (to === '/live') {
      navigateAndScroll(to, 0);
    } else {
      navigateAndScroll(to);
    }
  };

  return (
    <a 
      href={to} 
      className={className} 
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
};

export default SmoothLink; 