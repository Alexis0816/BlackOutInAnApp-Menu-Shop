// import React from 'react';
// import { GameCard } from './GameCard.jsx';
// import profile from '../assets/profile.png';
// import bottle from '../assets/beer-bottle.png';
// import shop from '../assets/shop.png';

// export function GameCardWrapper({ gameCards }) {
//   const { renderGameCards } = GameCard({ gameCards });

//   return (
//     <main className="app">
//       <header className="header">
//         <div className="person-icon">
//           <button className='profile-button'>
//             <img src={profile} alt="Person Icon" />
//           </button>
//         </div>

//         <div className="right-section">
//           <button className="add-button">+</button>
//           <img src={bottle} alt="Bottle Icon" />
//         </div>
//       </header>

//       <div className="grid-container">
//         <div className="grid">
//           {renderGameCards()}
//         </div>
//       </div>

//       <footer className="footer">
//         <img src={shop} alt="Shop Icon" className="shop-icon" />
//         <button className="shop-button">Shop</button>
//       </footer>
//     </main>
//   );
// };




// // GameCardWrapper.jsx

// import React from 'react';
// import { GameCard } from './GameCard.jsx';
// import profile from '../assets/profile.png';
// import bottle from '../assets/beer-bottle.png';
// import shop from '../assets/shop.png';



// export function GameCardWrapper({ gameCards, onNavigate }) {
  
//   return (
//     <main className="app">
//       <header className="header">
//         <div className="person-icon">
//           <button className='profile-button'>
//             <img src={profile} alt="Ícono de perfil" />
//           </button>
//         </div>

//         <div className="right-section">
//           <button className="add-button">+</button>
//           <img src={bottle} alt="Ícono de botella" />
//         </div>
//       </header>

//       <div className="grid-container">
//         <div className="grid">
//           <h2>Hola mundo</h2>
//         </div>
//       </div>

//       <footer className="footer">
//         <img src={shop} alt="Ícono de tienda" className="shop-icon" />
//         <button className="shop-button" onClick={() => onNavigate('shop')}>Tienda</button>
//       </footer>
//     </main>
//   );
// }




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
