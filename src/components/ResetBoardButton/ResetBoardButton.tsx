import React from 'react';
import './ResetBoardButton.css';

interface ResetBoardButtonProps {
  handleResetClick: () => void
}

const ResetBoardButton: React.FC<ResetBoardButtonProps> = ({ handleResetClick }) => {
  return (
    <div className="ResetBoardButton">
      <button onClick={() => handleResetClick()}>Reset Game</button>
    </div>
  )
};

export default ResetBoardButton;