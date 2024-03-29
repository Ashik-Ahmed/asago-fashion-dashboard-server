const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Server is Running!!')
})

const userRoute = require('./routes/user.route');
const categoryRoute = require('./routes/category.route');
const inventoryRoute = require('./routes/inventory.route');
const orderRoute = require('./routes/order.route');
const productRoute = require('./routes/product.route');
const reviewRoute = require('./routes/review.route');


app.use('/api/v1/user', userRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/inventory', inventoryRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/product', productRoute);
app.use('/api/v1/review', reviewRoute);


module.exports = app;