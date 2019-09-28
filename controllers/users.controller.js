const dbConn = require('../db/db');
const User = dbConn.connection.import('../models/usuario');
const userController = class UsersController {
    constructor() {
    }

    listUsers(req, res){
        try{
            User.findAll().then(
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

    getUserById(req, res){
        try{
            let userID = req.params.id;
            User.findAll({
                where:{
                    id: userID
                }
            }).then(
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

    createUser(req, res){
        try{
            User.create(req.body).then(
                (result) => {
                    res.status(200).send({message: 'Operacion realizada', data: result});
                }
            ).catch((err) => {
                throw err;
            });
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }

    updateUser(req, res){
        try{
            User.update(req.body, {where:req.params.id}).then(
                (result) => {
                    res.status(200).send({message: 'Operacion realizada', data: result});
                }
            ).catch((err) => {
                throw err;
            });
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }

    deleteUser(req, res){
        try{
            let userID = req.params.id;
            res.send(`User id: ${userID}`);
        }catch (e) {
            console.log('Error:::: ',e);
            res.status(500).send('Internal server error');
        }
    }
}

module.exports = new userController;
