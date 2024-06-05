import React from 'react';
import profile from '../assets/profile.png';
import bottle from '../assets/beer-bottle.png';
import shop from '../assets/shop.png';
import { GameCard } from './GameCard.jsx';

export function GameCardWrapper({ gameCards, onNavigate }) {
  // console.log(gameCards)

  return (
    <main className="app">
      <header className="header">
        <div className="person-icon">
          <button className='profile-button'>
            <img src={profile} alt="Ícono de perfil" />
          </button>
        </div>

        <div className="right-section">
          <button className="add-button">+</button>
          <img src={bottle} alt="Ícono de botella" />
        </div>
      </header>

      <div className="grid-container">
        <div className="grid">
          <GameCard gameCards={gameCards} />
        </div>
      </div>

      <footer className="footer">
        <img src={shop} alt="Ícono de tienda" className="shop-icon" />
        <button className="shop-button" onClick={() => onNavigate('shop')}>Tienda</button>
      </footer>
    </main>
  );
}
