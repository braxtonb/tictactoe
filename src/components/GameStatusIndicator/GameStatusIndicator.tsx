import React from 'react';
import GameStatus from '../../constants/game-status';
import PlayerTurn from '../../constants/player-turn';
import './GameStatusIndicator.css';

interface GameStatusIndicatorProps {
  gameStatus: GameStatus
  playerTurn: PlayerTurn
}

const GameStatusIndicator: React.FC<GameStatusIndicatorProps> = ({ gameStatus, playerTurn }) => {
  const _getDisplayText = () => {
    switch (gameStatus) {
      case GameStatus.PreGame:
        return 'Select Unit';
      case GameStatus.Live:
        return `Player ${playerTurn}'s turn`;
      default:
        return _getPostGameDisplayText();
    }
  }

  const _getPostGameDisplayText = () => {
    switch(playerTurn) {
      case PlayerTurn.None:
        return 'Draw';
      case PlayerTurn.AI:
        return 'AI Wins!';
      default:
        return `Player ${playerTurn} wins!`;
    }
  }

  return (
    <div className="GameStatusIndicator">
      <h3>{_getDisplayText()}</h3>
    </div>
  );
};

export default GameStatusIndicator;