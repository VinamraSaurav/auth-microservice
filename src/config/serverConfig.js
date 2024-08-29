const dotenv = require ('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const serverConfig = {
    port: process.env.PORT || 3001,
    SALT: bcrypt.genSaltSync(10),
    JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = serverConfig;