/* eslint-disable no-console */
require('dotenv').config();
const { join } = require('path');
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const nfetch = require('node-fetch');

const handleHomePage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
};

const fetchData = (url, res) => {
  nfetch(url, {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  })
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};

const getAllUsers = (req, res) => {
  fetchData('https://api.github.com/users', res);
};
const getOneUser = (req, res) => {
  const { username } = req.params;
  fetchData(`https://api.github.com/users/${username}`, res);
};

const getUserRepos = (req, res) => {
  const { username } = req.params;
  fetchData(`https://api.github.com/users/${username}/repos`, res);
};

const getRepoLanguages = (req, res) => {
  const { username, repo } = req.params;
  fetchData(`https://api.github.com/repos/${username}/${repo}/languages`, res);
};

module.exports = {
  getAllUsers,
  getOneUser,
  getUserRepos,
  handleHomePage,
  getRepoLanguages,
};
