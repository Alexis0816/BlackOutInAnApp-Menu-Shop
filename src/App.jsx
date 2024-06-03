import React from 'react';
import { GameCardWrapper } from './components/GameCardWrapper.jsx'; // Importa el componente GameCardWrapper

import lockedSymbol from './assets/locked.svg';
import playSymbol from './assets/play.svg';

const gameCards = [
  { color: 'yellow', symbol: playSymbol, prize: "5" },
  { color: 'white', symbol: lockedSymbol, prize: "7" },
  { color: 'white', symbol: lockedSymbol, prize: "10" },
  { color: 'turquoise', symbol: playSymbol, prize: "4" },
  { color: 'red', symbol: playSymbol, prize: "6" },
  { color: 'white', symbol: lockedSymbol, prize: "8" },
];

export function App() {
  return (
    <GameCardWrapper gameCards={gameCards} />
  )
}
