let express = require('express');
let router = express.Router();
let movingVehiclesController = require('../controllers/move.vehicles.controller');

router.get('/', (req, res, next) => movingVehiclesController.listMoves(req, res));
router.get('/move/:id', (req, res, next) => movingVehiclesController.listVehiclesByMove(req, res));
router.post('/', (req, res, next) => movingVehiclesController.createMove(req, res));

module.exports = router;
