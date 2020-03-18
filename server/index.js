const express = require('express');
const path = require('path');

//Routes
const APIRoutes = require('./routes/api');

const app = express();

const PORT = 3333;

app.use(express.json())

app.use(express.static(path.join(__dirname, "build")));


//INIT API Routes
APIRoutes(app);


app.listen(PORT, () => {console.log('App running on port: ', PORT)})