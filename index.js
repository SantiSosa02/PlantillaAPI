require('dotenv').config();
const Server = require('./models/server');
const { dbConnection } = require('./dataBase/config');

const server = new Server();

const port = process.env.PORT || 8080;

server.listen(port);

dbConnection();

