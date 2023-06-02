require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose")
require('./db/Connection');
const Products = require('./models/productsSchema');
// const products = require('./constant/productsdata');
const DefaultData = require('./defaultdata');
const cors = require("cors")
const router = require('./routes/Router');

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router); 

const port = 8005;

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`)
});

DefaultData();