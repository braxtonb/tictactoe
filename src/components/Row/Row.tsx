import React from 'react';
import './Row.css';

interface RowProps {
  children?: any
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <div className="Row">
      {children}
    </div>
  );
}

export default Row;