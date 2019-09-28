const dbConn = require('db/db');
const moveVehicles = dbConn.connection.import('../models/vehiculos');
const moveVehiclesController = class MoveVehiclesController {
    constructor() {

    }

    listMoves(req, res){
        try{
            moveVehicles.findAll().then(
                (result) => {
                    res.status(200).send({ message: 'Operacion realizada', data: result});
                }
            ).catch((err) => {
                throw err;
            });
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }

    listVehiclesByMove(req, res){
        try{
            moveVehicles.findAll({where: {id_trasteo: req.params.id}}).then(
                (result) => {
                    res.status(200).send({ message: 'Operacion realizada', data: result});
                }
            ).catch((err) => {
                throw err;
            });
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }

    createMove(req, res){
        try{
            moveVehicles.create(req.body).then(
                (result) => {
                    res.status(200).send({ message: 'Operacion realizada', data: result});
                }
            ).catch((err) => {
                throw err;
            });
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }
    updateMove(req, res){
        try{

        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }
    deleteMove(req, res){
        try{

        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }
}

module.exports = new moveVehiclesController;
