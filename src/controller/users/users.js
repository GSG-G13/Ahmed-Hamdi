/* eslint-disable no-console */
const getAllUsers = (req, res) => {
  fetch('https://api.github.com/users')
    .then((result) => result.json())
    .then((result) => res.status(200).json(result))
    .catch(console.log);
};
// @TODO - refactor result.json
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

module.exports = { getAllUsers, getOneUser, getUserRepos };
