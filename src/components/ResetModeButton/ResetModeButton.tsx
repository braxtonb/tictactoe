import React from 'react';
import './ResetModeButton.css';

interface ResetModeButtonProps {
  handleResetClick: () => void
}

const ResetModeButton: React.FC<ResetModeButtonProps> = ({ handleResetClick }) => {
  return (
    <div className="ResetModeButton">
      <button onClick={() => handleResetClick()}>Reset Mode</button>
    </div>
  )
};

export default ResetModeButton;