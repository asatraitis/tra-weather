const express = require('express');
const path = require('path');

const app = express();

const PORT = 3333;

app.use(express.json())

app.use(express.static(path.join(__dirname, "build")));

app.post('/API', (req, res) => {
    console.log('Incomming REQ..', req.body);
    res.send({msg: 'Pending auth route logic..'})
})

app.listen(PORT, () => {console.log('App running on port: ', PORT)})