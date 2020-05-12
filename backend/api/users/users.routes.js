const express = require('express');
const router = express.Router();
const { getUsers, getUser, addUser, updateUser, removeUser } = require('./users.controller')

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.put('/', updateUser);
router.delete('/:id', removeUser)

module.exports = router;