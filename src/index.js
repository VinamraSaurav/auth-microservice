const express = require('express');

const { port } = require('./config/serverConfig');

const app = express();

const prepareAndStartServer = () => {
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });
}

prepareAndStartServer();