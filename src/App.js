import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumbersList } from './features/numbers/NumbersList';
import { BetPanel } from './features/bets/BetPanel';
import { CommentsList } from './features/comments/CommentsList';
import { TimerPanel } from './features/timer/TimerPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        <NumbersList />
        <BetPanel />
        <TimerPanel />
        <CommentsList />
    </div>
  );
}

export default App;
