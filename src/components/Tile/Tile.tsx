import React from 'react';
import './Tile.css';

interface TileProps {
  borderLeft?: boolean
  borderTop?: boolean
  borderBottom?: boolean
  borderRight?: boolean
  disabled: boolean
  isWinner: boolean,
  value: number
  handleTileClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Tile: React.FC<TileProps> = (props) => {
  let displayChar;

  switch (props.value) {
    case 1:
      displayChar = 'X';
      break;
    case 2:
      displayChar = 'O';
      break;
    default:
      displayChar = '';
  }

  const isDisabled = Boolean(displayChar) || props.disabled;

  // prop dependent tile classes
  const disabledClass = isDisabled ? 'disabled' : '';
  const borderLeftClass = props.borderLeft ? 'border-left' : '';
  const borderTopClass = props.borderTop ? 'border-top' : '';
  const borderBottomClass = props.borderBottom ? 'border-bottom' : '';
  const borderRightClass = props.borderRight ? 'border-right' : '';
  const isWinnerClass = props.isWinner ? 'winner' : '';

  return (
    <button
      className={`Tile ${disabledClass} ${borderLeftClass} ${borderTopClass} ${borderBottomClass} ${borderRightClass} ${isWinnerClass}`}
      disabled={isDisabled}
      onClick={props.handleTileClick}
    >
      {displayChar}
    </button>
  )
}

export default Tile;