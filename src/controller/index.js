const express = require('express');
const { getAllUsers, getOneUser, getUserRepos } = require('./users/users');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:username', getOneUser);
router.get('/users/:username/repos', getUserRepos);
module.exports = { router };
