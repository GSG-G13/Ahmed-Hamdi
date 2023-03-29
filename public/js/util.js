const whole = document.querySelector('.whole');
const is = document.querySelector('#is');

const refactoredCreateCard = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  card.appendChild(cardContainer);

  const heroImageContainer = document.createElement('a');
  heroImageContainer.classList.add('hero-image-container');
  heroImageContainer.href = '/';
  cardContainer.appendChild(heroImageContainer);

  const heroImage = document.createElement('img');
  heroImage.classList.add('hero-image');
  heroImage.src = data.avatar_url;
  heroImage.alt = 'Spinning glass cube';
  heroImageContainer.appendChild(heroImage);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');
  cardContainer.appendChild(mainContent);

  const h1 = document.createElement('h1');
  mainContent.appendChild(h1);

  const a = document.createElement('a');
  a.href = '#';
  a.textContent = data.login;
  h1.appendChild(a);

  const p = document.createElement('p');
  p.textContent = 'Our Equilibrium collection promotes balance and calm.';
  mainContent.appendChild(p);

  const flexRow = document.createElement('div');
  flexRow.classList.add('flex-row');
  mainContent.appendChild(flexRow);

  const coinBase1 = document.createElement('div');
  coinBase1.classList.add('coin-base');
  flexRow.appendChild(coinBase1);

  const img1 = document.createElement('img');
  img1.classList.add('small-image');
  img1.src = 'https://i.postimg.cc/T1F1K0bW/Ethereum.png';
  img1.alt = 'Ethereum';
  coinBase1.appendChild(img1);

  const button1 = document.createElement('button');
  button1.id = 'submit-btn';
  button1.textContent = 'view repos';
  coinBase1.appendChild(button1);

  const coinBase2 = document.createElement('div');
  coinBase2.classList.add('coin-base');
  flexRow.appendChild(coinBase2);

  const img2 = document.createElement('img');
  img2.classList.add('small-image');
  img2.src = 'https://i.postimg.cc/T1F1K0bW/Ethereum.png';
  img2.alt = 'Ethereum';
  coinBase2.appendChild(img2);

  const button2 = document.createElement('button');
  button2.id = 'submit-btn';
  button2.textContent = 'view lang';
  button2.addEventListener('click', () => viewRepos(data.login));
  coinBase2.appendChild(button2);

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

const createPopUp = (data) => {
  const section = document.createElement('section');
  section.classList.add('pop-up');

  // create h1 element
  const h1 = document.createElement('h1');
  h1.classList.add('pop-up-title');
  h1.textContent = 'user repo';

  // create div element for repositories
  const div = document.createElement('div');
  div.classList.add('pop-up-repos');

  // create div element for close button

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  closeBtn.textContent = 'X';
  closeBtn.addEventListener('click', () => {
    is.removeChild(section);
  });
  section.appendChild(closeBtn);

  data.forEach((ele) => {
    const { name, owner, html_url } = ele;
    const repoDiv = document.createElement('div');
    repoDiv.classList.add('pop-container');

    const languages = document.createElement('div');
    languages.classList.add('languages');
    repoDiv.appendChild(languages);

    fetch(`/users/${owner.login}/repos/${name}/languages`)
      .then((res) => res.json())
      .then((res) => {
        const keys = Object.keys(res);
        keys.forEach((key) => {
          const language = document.createElement('div');
          language.classList.add('language');
          language.textContent = key;
          language.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          language.style.color = 'white';
          language.style.padding = '5px';
          language.style.borderRadius = '5px';
          language.style.margin = '5px';
          language.style.width = 'fit-content';
          language.style.height = 'fit-content';
          language.style.textAlign = 'center';
          languages.appendChild(language);
        });
      });


    // create div for repo title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('repo-title');

    // create h2 element for repo title
    const titleH2 = document.createElement('h2');
    titleH2.textContent = name;

    // append h2 to title div
    titleDiv.appendChild(titleH2);

    // create div for repo owner
    const ownerDiv = document.createElement('div');
    ownerDiv.classList.add('repo-owner');

    // create h2 element for repo owner
    const ownerH2 = document.createElement('h2');
    ownerH2.textContent = owner.login;

    // append h2 to owner div
    ownerDiv.appendChild(ownerH2);

    // create div for repo link
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('repo-link');

    // create h2 element for repo link
    const linkH2 = document.createElement('a');
    linkH2.textContent = 'GitHub Repo link';
    linkH2.href = html_url;

    // append h2 to link div
    linkDiv.appendChild(linkH2);

    // append title, owner, and link divs to repo div
    repoDiv.appendChild(titleDiv);
    repoDiv.appendChild(ownerDiv);
    repoDiv.appendChild(linkDiv);

    // append repo div to repositories div
    div.appendChild(repoDiv);
  });

  // append h1 and repositories div to section element
  section.appendChild(h1);
  section.appendChild(div);
  is.appendChild(section);
};

const viewRepos = (username) => {
  fetch(`/users/${username}/repos`)
    .then((res) => res.json())
    .then((data) => {
      createPopUp(data);
    })
    .catch((err) => console.log(err));
};
