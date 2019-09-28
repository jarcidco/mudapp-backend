require('dotenv').config();
const sequelize = require('sequelize');
const db = {};

const connection = new sequelize(process.env.DB_NAME, process.env.DB_USR, process.env.DB_PSW, {
    host: process.env.DB_SERVER,
    dialect: process.env.DIALECT,
    define: {
        timestamps: false
    },
});


connection.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

db.sequelize = sequelize;
db.connection = connection;
module.exports = db;
