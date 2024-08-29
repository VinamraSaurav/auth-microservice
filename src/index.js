const express = require('express');

const { port } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const db = require('./models/index');

const app = express();

const bodyParser = require('body-parser');




const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter: true});
    // }
}

prepareAndStartServer();