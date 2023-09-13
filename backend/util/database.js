const {Sequelize} = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {dialect: 'mysql', host: 'localhost'})


function init() {
    sequelize
    .sync({alter: true})
    .then(res => {
        console.log('Database connection successful');
    })
    .catch(err => console.log(err))
}

async function connect() {
    try {
        await sequelize.authenticate()
        console.log('Connection established successfully.')
    } catch (error) {
        console.log('Unable to connect to database.', error)
    }
}

function close() {
    sequelize.close()
}


exports.sequelize = sequelize;
exports.connect = connect;
exports.close = close;
exports.init = init;

const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');
const CartItem = require('../models/cart-item');
const OrderItem = require('../models/order-item');


Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})

User.hasMany(Product)
User.hasMany(Order)

Cart.belongsTo(User)
User.hasOne(Cart)
Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})
Order.belongsTo(User)
Order.belongsToMany(Product, {through: OrderItem})