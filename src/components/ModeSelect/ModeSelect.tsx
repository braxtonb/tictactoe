import React, { useMemo } from 'react';
import Mode from '../Mode/Mode';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import './ModeSelect.css';
import GameMode from '../../constants/game-mode';

interface ModeSelectProps {
  setMode: (mode: GameMode) => void
}

const ModeSelect: React.FC<ModeSelectProps> = ({ setMode }) => {
  const ComputerIcon = useMemo(() => <MaterialIcon iconName="computer" />, []);
  const PeopleIcon = useMemo(() => <MaterialIcon iconName="people" />, []);
  const GamepadIcon = useMemo(() => <MaterialIcon iconName="gamepad" />, []);

  return (
    <div className="ModeSelect">
      {/* Single Player */}
      <Mode
        description="vs AI"
        header="Single Player"
        icon={ComputerIcon}
        handleModeSelect={() => setMode(GameMode.SinglePlayer)}
      />
      {/* Single Player */}

      {/* Local Multiplayer */}
      <Mode
        description="vs Player"
        header="Local Multiplayer"
        icon={PeopleIcon}
        handleModeSelect={() => setMode(GameMode.LocalMultiplayer)}
      />
      {/* Local Multiplayer */}

      {/* Campaign */}
      <Mode
        description="save astronauts by collecting ship parts (release date TBD)"
        disabled
        header="Campaign"
        icon={GamepadIcon}
        handleModeSelect={() => setMode(GameMode.Campaign)}
      />
      {/* Campaign */}
    </div>
  );
};

export default ModeSelect;
