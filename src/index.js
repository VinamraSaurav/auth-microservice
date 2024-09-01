const express = require('express');

const { port } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const db = require('./models/index');

const app = express();

const bodyParser = require('body-parser');

// const { User, Role } = require('../src/models/index');




const prepareAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);

    // const u1 = await User.findByPk(5);
    // const r1 = await Role.findByPk(1);

    // console.log(u1,r1);

    // u1.addRole(r1);
    
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    });

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter: true});
    // }
}

prepareAndStartServer();