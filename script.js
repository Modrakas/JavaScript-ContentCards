import { characters } from './assets/characters.js';



let charactersHTML = '';

characters.forEach((character) => {
  charactersHTML += `
    <div class="cards-container">
      <div class="card">
        <div class="card-image-container">
          <img class="card-image"
            src="${character.image}">
        </div>
        <div class="info">
          <div class="card-name limit-text-to-2-lines">
            ${character.name}
          </div>

          <div class="character-life-container">
            <div class="character-life">
            ${character.age} • ${character.residence}
            </div>
          </div>

          <div class="woc">
          ${character.weapon}
          </div>

          <div class="hobby">
          ${character.hobby}
          </div>

          <div class="bio">
          ${character.bio}
          </div>
        </div>
      </div>
    </div>
  `;

 
});

document.querySelector('.js-cards-grid').innerHTML = charactersHTML;