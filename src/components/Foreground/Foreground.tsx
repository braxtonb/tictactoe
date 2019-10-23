import React, { useState, useCallback } from 'react';
import ModeSelect from '../ModeSelect/ModeSelect';
import GameMode from '../../constants/game-mode';
import './Foreground.css';
import TicTacToe from '../TicTacToe/TicTacToe';
import SinglePlayerTicTacToe from '../SinglePlayerTicTacToe/SinglePlayerTicTacToe';
import LocalMultiPlayerTicTacToe from '../LocalMultiPlayerTicTacToe/LocalMultiPlayerTicTacToe';
import Center from '../Center/Center';

type AllGameModes = -1 | GameMode;

const INITIAL_MODE: AllGameModes = -1;

const Foreground: React.FC = () => {
  const [mode, setMode] = useState(INITIAL_MODE);
  const _resetModeCallback = useCallback(() => {
    setMode(-1);
  }, []);
  let content;

  switch(mode) {
    case -1:
      content = <ModeSelect setMode={setMode} />;
      break;
    case GameMode.SinglePlayer:
      content = <SinglePlayerTicTacToe resetMode={_resetModeCallback} />;
      break;
    case GameMode.LocalMultiplayer:
      content = <LocalMultiPlayerTicTacToe resetMode={_resetModeCallback} />;
      break;
    default:
      content = <TicTacToe />;
  }

  return (
    <div className="Foreground">
      <Center>
        {content}
      </Center>
    </div>
  );
};

export default Foreground;
