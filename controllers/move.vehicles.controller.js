const dbConn = require('db/db');
export class MoveVehiclesController {
    constructor() {

    }

    listMoves(req, res){
        try{

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

export const moveVehiclesController = new MoveVehiclesController();
