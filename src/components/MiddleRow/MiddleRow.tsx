import React, { useMemo } from 'react';
import Row from '../Row/Row';
import Tile from '../Tile/Tile';
import GameStatus from '../../constants/game-status';
import { PlayerTurn } from '../../constants/constants.index';

type TileStatus = 0 | PlayerTurn;

interface MiddleRowProps {
  boardArray: number[]
  winningTiles: TileStatus[]
  gameStatus: GameStatus
  handleTileClick: (tileIndex: number) => void
}

const MiddleRow: React.FC<MiddleRowProps> = ({ boardArray, winningTiles, gameStatus, handleTileClick }) => {
  const isTileDisabled: boolean = useMemo((): boolean => gameStatus === GameStatus.PostGame, [gameStatus]);
  const isTileWinner = (tileIndex: number): boolean => winningTiles.includes(tileIndex);

  return (
    <Row>
      <Tile
        disabled={isTileDisabled}
        value={boardArray[3]}
        isWinner={isTileWinner(3)}
        borderTop
        borderBottom
        borderRight
        handleTileClick={() => handleTileClick(3)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[4]}
        isWinner={isTileWinner(4)}
        borderLeft
        borderTop
        borderBottom
        borderRight
        handleTileClick={() => handleTileClick(4)} />
      <Tile
        disabled={isTileDisabled}
        value={boardArray[5]}
        isWinner={isTileWinner(5)}
        borderLeft
        borderTop
        borderBottom
        handleTileClick={() => handleTileClick(5)} />
    </Row>
  )
}

export default MiddleRow;