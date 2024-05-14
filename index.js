const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API server")
});


mongoose.connect("mongodb+srv://adewaleadebayo202:INiWuVZtp5HHS0l0@backenddb.vnvq3gx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(4001, () => {
            console.log("server is running at port 4001");
        });
    })
    .catch(() => {
        console.log("Could not connect to the")
    });