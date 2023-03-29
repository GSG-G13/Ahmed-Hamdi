const express = require('express');
const { getAllUsers, getOneUser, getUserRepos } = require('./users/users');
const { clientError, serverError } = require('./errors/error');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:username', getOneUser);
router.get('/users/:username/repos', getUserRepos);
router.use(clientError);
router.use(serverError);
module.exports = { router };
