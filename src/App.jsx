import React, { useState } from 'react';
import { GameCardWrapper } from './components/GameCardWrapper';
import { Shop } from './components/Shop/Shop.jsx';

import lockedSymbol from './assets/locked.svg';
import playSymbol from './assets/play.svg';

export function App() {
  // Aquí defines gameCards con los datos que deseas mostrar
  const gameCardsMenu = [
    { color: 'yellow', symbol: playSymbol, prize: "5" },
    { color: 'white', symbol: lockedSymbol, prize: "7" },
    { color: 'white', symbol: lockedSymbol, prize: "10" },
    { color: 'turquoise', symbol: playSymbol, prize: "4" },
    { color: 'red', symbol: playSymbol, prize: "6" },
    { color: 'white', symbol: lockedSymbol, prize: "8" },
  ];

  const gameCardsShop = [
    { color: 'white', symbol: lockedSymbol, prize: "7" },
    { color: 'turquoise', symbol: playSymbol, prize: "4" },
    { color: 'gray', symbol: playSymbol, prize: "5" },
    { color: 'white', symbol: lockedSymbol, prize: "10" },
  ];

  const [currentView, setCurrentView] = useState('gameCardWrapper');
  
  const handleNavigate = (view) => {
    setCurrentView(view);
  };
  
  return (
    <>
      {currentView === 'gameCardWrapper' && <GameCardWrapper gameCards={gameCardsMenu} onNavigate={handleNavigate} />}
      {currentView === 'shop' && <Shop gameCards={gameCardsShop} onNavigate={handleNavigate} />}
    </>
  );
}

export default App;


