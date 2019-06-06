const express = require('express');

const server = express();

server.use(express.json());

const database = require('./db-model');


server.get('/api/dishes', (req, res) => {
    database.getDishes()
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});


server.get('/', (req, res) => {
    res.status(200).json("Server is up and running!")
});


//--------------------------------------------

const port = process.env.PORT || 3000;

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)
