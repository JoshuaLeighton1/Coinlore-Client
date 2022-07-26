import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoinList from './components/coins';
import Info from './components/coins';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CoinList></CoinList>
      </header>
    </div>
  );
}

export default App;
