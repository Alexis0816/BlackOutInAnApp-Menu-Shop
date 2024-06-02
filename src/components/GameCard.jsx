// GameCard.js
import React from 'react';

const GameCard = ({ color, symbol, prize }) => {
  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={symbol} alt="Symbol"/>
      <button className='prize-button' style={{backgroundColor: color}}>
        <h2 className='prize'> {`S/.${prize}`} </h2>
      </button>
    </div>
  );
};


export default GameCard;