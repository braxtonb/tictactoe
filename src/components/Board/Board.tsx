import React from 'react';
import TopRow from '../TopRow/TopRow';
import MiddleRow from '../MiddleRow/MiddleRow';
import BottomRow from '../BottomRow/BottomRow';
import { GameStatus, PlayerTurn } from '../../constants/constants.index';
import './Board.css';

type TileStatus = 0 | PlayerTurn;

interface BoardProps {
  boardArray: TileStatus[]
  winningTiles: TileStatus[]
  gameStatus: GameStatus
  handleTileClick: (clickedTileIndex: number) => void
}

const Board: React.FC<BoardProps> = ({ boardArray, winningTiles, gameStatus, handleTileClick }) => {
  return (
    <div className="Board">
      <TopRow
        boardArray={boardArray}
        winningTiles={winningTiles}
        gameStatus={gameStatus}
        handleTileClick={handleTileClick} />
      <MiddleRow
        boardArray={boardArray}
        winningTiles={winningTiles}
        gameStatus={gameStatus}
        handleTileClick={handleTileClick} />
      <BottomRow
        boardArray={boardArray}
        winningTiles={winningTiles}
        gameStatus={gameStatus}
        handleTileClick={handleTileClick} />
    </div>
  );
}

export default Board;