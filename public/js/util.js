const whole = document.querySelector('.whole');

const refactoredCreateCard = (data) => {
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
        <button id="submit-btn">view repos</button>
      </div>
      <div class="coin-base">
      <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" class="small-image"/>
      <button id="submit-btn">view lang</button>
    </div>
    </div>
  </main>
</div>
    `;
  whole.appendChild(card);
};
// eslint-disable-next-line no-unused-vars
const createCard = (data) => {
  whole.innerHTML = '';
  if (!Array.isArray(data)) {
    refactoredCreateCard(data);
  } else {
    data.forEach((ele) => {
      refactoredCreateCard(ele);
    });
  }
};
