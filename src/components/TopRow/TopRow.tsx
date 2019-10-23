import React, { useMemo } from 'react';
import Row from '../Row/Row';
import Tile from '../Tile/Tile';
import GameStatus from '../../constants/game-status';
import { PlayerTurn } from '../../constants/constants.index';

type TileStatus = 0 | PlayerTurn;

interface TopRowProps {
  boardArray: number[]
  winningTiles: TileStatus[]
  gameStatus: GameStatus
  handleTileClick: (tileIndex: number) => void
}

const TopRow: React.FC<TopRowProps> = ({ boardArray, winningTiles, gameStatus, handleTileClick }) => {
  const isTileDisabled: boolean = useMemo(() => gameStatus === GameStatus.PostGame, [gameStatus]);
  const isTileWinner = (tileIndex: number): boolean => winningTiles.includes(tileIndex);

  return (
    <Row>
      <Tile
        disabled={isTileDisabled}
        value={boardArray[0]}
        isWinner={isTileWinner(0)}
        borderBottom
        borderRight
        handleTileClick={() => handleTileClick(0)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[1]}
        isWinner={isTileWinner(1)}
        borderLeft
        borderBottom
        borderRight
        handleTileClick={() => handleTileClick(1)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[2]}
        isWinner={isTileWinner(2)}
        borderLeft
        borderBottom
        handleTileClick={() => handleTileClick(2)} />
    </Row>
  )
}

export default TopRow;