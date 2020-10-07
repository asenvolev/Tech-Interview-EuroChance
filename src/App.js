import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumbersList } from './features/numbers/NumbersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumbersList />
      </header>
    </div>
  );
}

export default App;
