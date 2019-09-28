const dbConn = require('../db/db');
const Moves = dbConn.connection.import('../models/trasteos');
const movesController = class MovesController {
    constructor() {

    }

    listMove(req, res){
        try{

        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }

    getMovesByUser(req, res){
        try{
            Moves.findAll({ where: {id_usuario: req.params.idUser}}).then(
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

module.exports = new movesController;
