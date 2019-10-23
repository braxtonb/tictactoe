import React from 'react';
import './Center.css';

interface CenterProps {
  children?: any
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return <div className="Center">{children}</div>;
};

export default Center;
