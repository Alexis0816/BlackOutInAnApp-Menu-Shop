import React from 'react';
import { GameCard } from './GameCard.jsx';
import profile from '../assets/profile.png';
import bottle from '../assets/beer-bottle.png';
import shop from '../assets/shop.png';

export function GameCardWrapper({ gameCards }) {
  const { renderGameCards } = GameCard({ gameCards });

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
          {renderGameCards()}
        </div>
      </div>

      <footer className="footer">
        <img src={shop} alt="Shop Icon" className="shop-icon" />
        <button className="shop-button">Shop</button>
      </footer>
    </main>
  );
};


