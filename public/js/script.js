/* eslint-disable no-console */
/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

fetch('/users')
  .then((res) => res.json())
  .then((data) => { createCard(data); })
  .catch((err) => console.log(err));


searchButton.addEventListener('click', () => {
  const searchValue = searchInput.value;
  if (searchValue === '' || searchValue === null) {
    // eslint-disable-next-line no-alert
    alert('Please enter a valid search term');
  } else {
    fetch(`/users/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        createCard(data);
      })
      .catch((err) => console.log(err));
  }
});
