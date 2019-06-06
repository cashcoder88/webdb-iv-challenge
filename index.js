const express = require('express');

const server = express();

server.use(express.json());

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.status(200).json('This is a test, your server is Getting!')
});

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)