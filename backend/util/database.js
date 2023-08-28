// const mysql = require('mysql2')
// const dotenv = require('dotenv')
// dotenv.config()

// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize;