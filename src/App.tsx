import React from 'react';
import './App.scss';
import { GameProvider } from './components/GameContext';
import Board from './components/Board';

function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
