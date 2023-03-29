const express = require('express');
const { getAllUsers, getOneUser, getUserRepos } = require('./users/users');
const { clientError } = require('./errors/error');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:username', getOneUser);
<<<<<<< HEAD
router.get('/users/:username/repos', getUserRepos);
=======
// router.get('/users/:username/repos', getUserRepos);
router.use(clientError);
>>>>>>> main
module.exports = { router };
