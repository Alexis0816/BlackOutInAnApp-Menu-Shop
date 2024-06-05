import React from 'react';
import './Shop.css';
import dolar from './dolar.svg'
import outline from './abajo.png'

import { GameCard } from '../GameCard.jsx';


export function Shop({ gameCards, onNavigate }) {

  return (
    <main className="shop-app">
      <header className="unlock-all">
        <img src={dolar} alt="Ícono de dolar" className='dolar-icon' />
        <div className="unlock-text">
          <span> Unlock all </span>
          <span> games </span>
        </div>
      </header>

      <div className="grid-container">
        <div className="grid">
          <GameCard gameCards={gameCards} />
        </div>
      </div>

      <footer className="footer">
        <div className='content-icon-footer'>
          <img src={outline} alt="Ícono abajo" className='outline-icon' />
        </div>
        <button className="menu-button" onClick={() => onNavigate('gameCardWrapper')}>Menú</button>
      </footer>
    </main>
  );
}
