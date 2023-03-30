/* eslint-disable no-console */
/* eslint-disable no-undef */
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

fetch('/users')
  .then((res) => res.json())
  .then((data) => { createCard(data); })
  .catch((err) => { throw new TypeError(err); });

searchButton.addEventListener('click', () => {
  if (searchInput.value === '' || searchInput.value === null) {
    // eslint-disable-next-line no-alert
    alert('Please enter a valid search term');
  } else {
    fetch(`/users/${searchInput.value}`)
      .then((res) => res.json())
      .then((data) => {
        createCard(data);
      })
      .catch((err) => { throw new TypeError(err); });
  }
});
