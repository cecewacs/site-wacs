import React, { useState } from 'react';
import logo from './logo-wacs.png';
import './App.css';
import Snowfall from './Snowfall';

// function selectMenu(choice) {
//   // Mettre à jour le texte dans le tableau
  
//   const menuChoiceCell = document.getElementById("menu-choice");
//   const text=""
//   for (let i=0;i<5;i++){
//     text+=`<td> ${choice[i]} </td>`
//   }
//   menuChoiceCell.textContent = text;
// }


function App() {
  const menudebase=["pain/nutella","tartiflette","croziflette","pain/nutella","raclette"]
  const menuvege=["pain/nutella","tartiflette sans viande","croziflette sans viande","pain/nutella","raclette salade"]
  const menusansporc=["pain/nutella","tartiflette sans porc","croziflette sans porc","pain/nutella","raclette sans porc"]

  // État pour stocker le menu actuellement sélectionné
  const [selectedMenu, setSelectedMenu] = useState(menudebase);

  // Fonction pour gérer le clic sur un bouton et mettre à jour le menu
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="App">
      <Snowfall />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="titre">Menus du WEPN</h1>

        <div id="button-container">
        <button
          className="menu-button"
          onClick={() => handleMenuClick(menudebase)}
        >
          Menu normal
        </button>
        <button
          className="menu-button"
          onClick={() => handleMenuClick(menuvege)}
        >
          Menu Végé
        </button>
        <button
          className="menu-button"
          onClick={() => handleMenuClick(menusansporc)}
        >
          Menu sans porc
        </button>
        </div>

        <table border="1">
          <thead>
              <tr>
                  <th>Petit déjeuner Samedi</th>
                  <th>Déjeuner Samedi</th>
                  <th>Dîner Samedi</th>
                  <th>Petit déjeuner Dimanche</th>
                  <th>Déjeuner Dimanche</th>
              </tr>
          </thead>
          <tbody>
              <tr id="menu-choice">
                {selectedMenu.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
              </tr>
          </tbody>
      </table>
        
        
        <p>
          (Le super site de Céline.)
        </p>
      </header>
    </div>
  );
}


export default App;
