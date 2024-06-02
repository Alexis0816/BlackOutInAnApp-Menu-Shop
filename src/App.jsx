// App.jsx
import React from 'react';
import GameCard from './components/GameCard.jsx';
import './App.css';

import lockedSymbol from './assets/locked.svg';
import playSymbol from './assets/play.svg';
import bottle from './assets/beer-bottle.png';
import profile from './assets/profile.png';
import shop from './assets/shop.png';

const App = () => {
  const gameCards = [
    { color: 'yellow', symbol: playSymbol, prize: "5" },
    { color: 'white', symbol: lockedSymbol, prize: "7" },
    { color: 'white', symbol: lockedSymbol, prize: "10" },
    { color: 'turquoise', symbol: playSymbol, prize: "4" },
    { color: 'red', symbol: playSymbol, prize: "6" },
    { color: 'white', symbol: lockedSymbol, prize: "8" },
  ];

  return (
    <main className="app">
      <header className="header">
        <div className="person-icon">
          <button className='profile-button'>
            <img src={profile} alt="Person Icon" />
          </button>
        </div>

        <div className="right-section">
          <button className="add-button">+</button>
          <img src={bottle} alt="Bottle Icon" />
        </div>
      </header>

      <div className="grid-container">
        <div className="grid">
          {gameCards.map((card, index) => (
            <GameCard key={index} color={card.color} symbol={card.symbol} prize={card.prize} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <img src={shop} alt="Shop Icon" className="shop-icon" />
        <button className="shop-button">Shop</button>
      </footer>
    </main>
  );
};

export default App;
