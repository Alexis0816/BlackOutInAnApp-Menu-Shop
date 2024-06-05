// GameCard.js
import React from 'react';

export const GameCard = ({ gameCards }) => {
  const renderGameCards = () => {
    return gameCards.map((card, index) => (
      <button className='prize-button' style={{ backgroundColor: card.color }}>
        <div key={index} className="card" style={{ backgroundColor: card.color }}>
          <img src={card.symbol} alt="Symbol" />
          <h2 className='prize'> {`S/.${card.prize}`} </h2>
        </div>
      </button>
    ));
  };

  return renderGameCards();
};




