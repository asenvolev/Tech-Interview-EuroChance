import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumbersList } from './features/numbers/NumbersList';
import { BetPanel } from './features/bets/BetPanel';
import { CommentsList } from './features/comments/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumbersList />
        <BetPanel />
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
