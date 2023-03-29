/* eslint-disable no-console */
const { join } = require('path');

const handleHomePage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
};

const getAllUsers = (req, res) => {
  fetch('https://api.github.com/users')
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};
const getOneUser = (req, res) => {
  const { username } = req.params;
  fetch(`https://api.github.com/users/${username}`)
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

const getUserRepos = (req, res) => {
  const { username } = req.params;
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

const getRepoLanguages = (req, res) => {
  const { username, repo } = req.params;
  fetch(`https://api.github.com/repos/${username}/${repo}/languages`)
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

module.exports = {
  getAllUsers,
  getOneUser,
  getUserRepos,
  handleHomePage,
  getRepoLanguages,
};
