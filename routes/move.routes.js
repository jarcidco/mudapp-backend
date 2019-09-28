let express = require('express');
let router = express.Router();
let movesController = require('../controllers/moves.controller');

router.get('/by-user/:idUser', (req, res) => movesController.getMovesByUser(req, res));
router.post('/', (req, res) => movesController.createMove(req, res));

module.exports = router;
