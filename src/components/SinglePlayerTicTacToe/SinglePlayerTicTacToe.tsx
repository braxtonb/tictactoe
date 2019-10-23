import React, { useState } from 'react';
import GameStatusIndicator from '../GameStatusIndicator/GameStatusIndicator';
import ResetBoardButton from '../ResetBoardButton/ResetBoardButton';
import { GameStatus, PlayerTurn } from '../../constants/constants.index';
import { getWinningTiles } from '../../api/helpers';
import Board from '../Board/Board';
import './SinglePlayerTicTacToe.css';
import ResetModeButton from '../ResetModeButton/ResetModeButton';

type TileStatus = 0 | PlayerTurn;

interface SinglePlayerTicTacToeProps {
  resetMode: React.EffectCallback
}

// initialize board tiles to empty
const INITIAL_BOARD_STATE: TileStatus[] = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];
// initialize winning tiles to an empty array
const INITIAL_WINNING_TILES: TileStatus[] = [];
// player 1 goes first
const INITIAL_PLAYER_TURN: number = PlayerTurn.PlayerOne;
// game begins in live state (will be pre game in the future)
const INITIAL_GAME_STATUS: number = GameStatus.Live;

const SinglePlayerTicTacToe: React.FC<SinglePlayerTicTacToeProps> = ({ resetMode }) => {
  // initialize state
  const [boardArray, setBoardArray] = useState(INITIAL_BOARD_STATE);
  const [winningTiles, setWinningTiles] = useState(INITIAL_WINNING_TILES);
  const [playerTurn, setPlayerTurn] = useState(INITIAL_PLAYER_TURN);
  const [gameStatus, setGameStatus] = useState(INITIAL_GAME_STATUS);

  /**
   * Handlers
   */

  /**
   * Handles tile click event by updating board state, game status, and player turn
   * @param {number} clickedTileIndex
   */
  const _handleTileClick = (clickedTileIndex: number): void => {
    // human move
    let updatedBoardArray: TileStatus[] = _updateBoard(clickedTileIndex, PlayerTurn.PlayerOne);
    let updatedWinningTiles = getWinningTiles(updatedBoardArray);
    let updatedGameStatus: number = updatedWinningTiles.length > 0 ? GameStatus.PostGame : gameStatus;
    let nextPlayerTurn: PlayerTurn = playerTurn;

    if (updatedGameStatus !== GameStatus.PostGame) {
      // if game is not over
      // AI move
      const computerSelectedTileIndex: number = _getComputerTurn(updatedBoardArray);
      updatedBoardArray = _updateBoard(computerSelectedTileIndex, PlayerTurn.PlayerTwo, updatedBoardArray);
      updatedWinningTiles = getWinningTiles(updatedBoardArray);

      if (updatedWinningTiles.length > 0) {
        // AI wins
        // game is over
        updatedGameStatus = GameStatus.PostGame;
        nextPlayerTurn = PlayerTurn.AI;
      } else if (_getEmptyBoardTiles(updatedBoardArray).length === 0) {
        updatedGameStatus = GameStatus.PostGame;
        nextPlayerTurn = PlayerTurn.None;
      } else {
        updatedGameStatus = gameStatus;
      }
    }

    setPlayerTurn(nextPlayerTurn);
    setBoardArray(updatedBoardArray);
    setWinningTiles(updatedWinningTiles);
    setGameStatus(updatedGameStatus);
  };

  /**
   * Reset all state variables to their initial values
   */
  const _handleResetClick = (): void => {
    setBoardArray(INITIAL_BOARD_STATE);
    setWinningTiles(INITIAL_WINNING_TILES);
    setGameStatus(INITIAL_GAME_STATUS);
    setPlayerTurn(INITIAL_PLAYER_TURN);
  };

  /**
   * Getters
   */

  /**
   * Determine next board state
   * @param {number} clickedTileIndex - index of board array, represents position of clicked tile
   *
   * @returns {number[]} - next board state
   */
  const _updateBoard = (clickedTileIndex: number, playerTurn: PlayerTurn, board: TileStatus[] = boardArray): number[] => {
    return board.map((prevValue, tileIndex) => tileIndex === clickedTileIndex ? playerTurn : prevValue);
  };

  const _getComputerTurn = (board: TileStatus[] = boardArray): number => {
    const emptyBoardTiles: TileStatus[] = _getEmptyBoardTiles(board);

    return _getRandomTile(emptyBoardTiles);
  };

  const _getEmptyBoardTiles = (board: TileStatus[] = boardArray): TileStatus[] => {
    const initialState: TileStatus[] = [];

    return board.reduce((accu, tileValue, tileIndex) => {
      if (tileValue === 0) {
        accu.push(tileIndex);
      }

      return accu;
    }, initialState);
  };

  const _getRandomTile = (boardArray: TileStatus[]): number => {
    const randomTileIndex = Math.round(Math.random() * (boardArray.length - 1));

    return boardArray[randomTileIndex];
  };

  return (
    <div className="SinglePlayerTicTacToe">
      <Board
        boardArray={boardArray}
        winningTiles={winningTiles}
        gameStatus={gameStatus}
        handleTileClick={_handleTileClick}
      />

      <GameStatusIndicator gameStatus={gameStatus} playerTurn={playerTurn} />
      <ResetBoardButton handleResetClick={_handleResetClick} />
      <ResetModeButton handleResetClick={resetMode} />
    </div>
  );
}

export default SinglePlayerTicTacToe;