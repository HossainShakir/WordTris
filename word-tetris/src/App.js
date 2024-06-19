import React from 'react';
import GameBoard from './components/GameBoard';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Block Dropping Game</h1>
      <GameBoard />
    </div>
  );
};

export default App;
