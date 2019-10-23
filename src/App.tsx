import React from 'react';
import Background from './components/Background/Background';
import Foreground from './components/Foreground/Foreground';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
