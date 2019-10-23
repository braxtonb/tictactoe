import PlayerTurn from "../constants/player-turn";

type TileStatus = 0 | PlayerTurn;

/**
 * Determines if a player has won
 * @param {number[]} boardArray - array representation of a tic tac toe board
 * 
 * @returns {number[]} - array representation of winning tiles
 */
export const getWinningTiles = (boardArray: number[]): number[] => {
  for (let tileIndex: number = 0; tileIndex <= 6; tileIndex++) {
    // iterate from 0 to 6 since no new outcomes can be determined by tileIndexes 7 or 8
    if (tileIndex % 3 === 0 && _isSamePlayer(boardArray[tileIndex], boardArray[tileIndex + 1], boardArray[tileIndex + 2])) {
      // tileIndex is 0, 1, OR 2
      // AND a player has all tiles of a row
      return [tileIndex, tileIndex + 1, tileIndex + 2];
    }

    if (tileIndex < 3 && _isSamePlayer(boardArray[tileIndex], boardArray[tileIndex + 3], boardArray[tileIndex + 6])) {
      // tileIndex is less than 3
      // AND a player has all tiles of a column
      return [tileIndex, tileIndex + 3, tileIndex + 6];
    }

    if (tileIndex === 0 && _isSamePlayer(boardArray[tileIndex], boardArray[tileIndex + 4], boardArray[tileIndex + 8])) {
      // tileIndex is 0
      // AND a player has all tiles of the top left to bottom right diagonal
      return [tileIndex, tileIndex + 4, tileIndex + 8];
    }

    if (tileIndex === 2 && _isSamePlayer(boardArray[tileIndex], boardArray[tileIndex + 2], boardArray[tileIndex + 4])) {
      // tileIndex is 2
      // AND a player has all tiles of the top right to bottom left diagonal
      return [tileIndex, tileIndex + 2, tileIndex + 4];
    }
  };

  return [];
};

/**
 * Same player if board array has the same value for all provided tile {number} indexes- index of boardArray, represents a position on the board
 * @param {TileStatus} firstTile - index of boardArray, represents a position on the board
 * @param {TileStatus} secondTile - index of boardArray, represents a position on the board
 * @param {TileStatus} thirdTile - index of boardArray, represents a position on the board
 */
const _isSamePlayer = (firstTile: TileStatus, secondTile: TileStatus, thirdTile: TileStatus): boolean => {
  return (
    firstTile !== 0 && // tile is filled
    firstTile === secondTile && // check if firstTile and secondTile belong to same player
    secondTile === thirdTile // check if secondTile and thirdTile belong to same player
  );
};