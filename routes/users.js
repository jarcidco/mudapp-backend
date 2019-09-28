var express = require('express');
var router = express.Router();
let usersController = require('../controllers/users.controller');

/* POST to register users. */
router.get('/profile/:id', (res, req) => usersController.getUserById(res, req));
router.post('/register', (res, req) => usersController.createUser(res, req));

module.exports = router;
