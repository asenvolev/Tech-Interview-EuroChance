import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumbersList } from './features/numbers/NumbersList';
import { BetPanel } from './features/bets/BetPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumbersList />
        <BetPanel />
      </header>
    </div>
  );
}

export default App;
