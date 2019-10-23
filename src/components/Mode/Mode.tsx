import React from 'react';
import './Mode.css';

interface ModeProps {
  description: string
  disabled?: boolean
  header: string
  icon: any
  handleModeSelect: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Mode: React.FC<ModeProps> = ({ description, disabled, header, icon, handleModeSelect }) => {
  return (
    <div className={`Mode ${disabled ? 'disabled' : ''}`} onClick={disabled ? undefined : handleModeSelect}>
      <h2 className="Mode-header">{header}</h2>
      <br/>
      {icon}
      <br/>
      <p className="Mode-description">{description}</p>
    </div>
  );
}

export default Mode;