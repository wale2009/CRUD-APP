// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API server")
});

// Connect to MongoDB using environment variable
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to database!");
        app.listen(4001, () => {
            console.log("Server is running at port 4001");
        });
    })
    .catch((error) => {
        console.error("Could not connect to the database:", error);
    });