/* eslint-disable no-console */
require('dotenv').config();
const { join } = require('path');
const nfetch = require('node-fetch');

const handleHomePage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
};

const getAllUsers = (req, res) => {
  nfetch('https://api.github.com/users', {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  })
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};
const getOneUser = (req, res) => {
  const { username } = req.params;
  nfetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  })
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

const getUserRepos = (req, res) => {
  const { username } = req.params;
  nfetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  })
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

const getRepoLanguages = (req, res) => {
  const { username, repo } = req.params;
  nfetch(`https://api.github.com/repos/${username}/${repo}/languages`, {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  })
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
