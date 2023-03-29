const express = require('express');
const {
  getAllUsers,
  getOneUser,
  getUserRepos,
  handleHomePage,
  getRepoLanguages,
} = require('./users/users');
const { clientError, serverError } = require('./errors/error');

const router = express.Router();

router.get('/', handleHomePage);
router.get('/users', getAllUsers);
router.get('/users/:username', getOneUser);
router.get('/users/:username/repos', getUserRepos);
router.get('/users/:username/repos/:repo/languages', getRepoLanguages);
router.use(clientError);
router.use(serverError);
module.exports = { router };
