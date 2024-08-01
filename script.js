import { characters } from './assets/characters.js';


let charactersHTML = '';

characters.forEach((character) => {
  charactersHTML += `
  <div class="card">
      <div class="content js-content">
        <img class="front-img" src="${characters.image}" alt="">

        <div class="info">
          <h1 class="name">${characters.name}</h1>

          <div id="moreInfo">
            <h2 class="deets">${characters.age} • ${characters.residence}</h2>

            <h3 class="woc">${characters.woc}</h3>

            <h3 class="hobby">${characters.hobby}</h3>
          </div>

          <div class="footer">
            <button onclick=more();>More</button>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.js-content').innerHTML = charactersHTML;

function more(){
  document.getElementById('moreInfo')
  .innerHTML=`<div class="moreInfo">${characters.bio}`;
}