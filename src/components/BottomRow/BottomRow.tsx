import React, { useMemo } from 'react';
import Row from '../Row/Row';
import Tile from '../Tile/Tile';
import GameStatus from '../../constants/game-status';
import { PlayerTurn } from '../../constants/constants.index';

type TileStatus = 0 | PlayerTurn;

interface BottomRowProps {
  boardArray: number[]
  winningTiles: TileStatus[]
  gameStatus: GameStatus
  handleTileClick: (tileIndex: number) => void
}

const BottomRow: React.FC<BottomRowProps> = ({ boardArray, winningTiles, gameStatus, handleTileClick }) => {
  const isTileDisabled: boolean = useMemo(() => gameStatus === GameStatus.PostGame, [gameStatus]);
  const isTileWinner = (tileIndex: number): boolean => winningTiles.includes(tileIndex);

  return (
    <Row>
      <Tile
        disabled={isTileDisabled}
        value={boardArray[6]}
        isWinner={isTileWinner(6)}
        borderTop
        borderRight
        handleTileClick={() => handleTileClick(6)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[7]}
        isWinner={isTileWinner(7)}
        borderLeft
        borderTop
        borderRight
        handleTileClick={() => handleTileClick(7)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[8]}
        isWinner={isTileWinner(8)}
        borderLeft
        borderTop
        handleTileClick={() => handleTileClick(8)} />
    </Row>
  )
}

export default BottomRow;