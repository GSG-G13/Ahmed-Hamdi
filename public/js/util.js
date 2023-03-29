const body = document.querySelector('body');
const createCard = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
       
        <div class="card-container">
        <a href="/" class="hero-image-container">
          <img class="hero-image" src="${data.avatar_url}" alt="Spinning glass cube"/>
        </a>
        <main class="main-content">
          <h1><a href="#">${data.login}</a></h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div class="flex-row">
            <div class="coin-base">
              <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" class="small-image"/>
              <button id="submit-btn">view languages</button>
            </div>
            <div class="coin-base">
            <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" class="small-image"/>
            <button id="submit-btn">view languages</button>
          </div>
          </div>
        </main>
      </div>
    `;
  body.appendChild(card);
};
    

// 
