const dotenv = require ('dotenv');

dotenv.config();

const serverConfig = {
    port: process.env.PORT || 3001
};

module.exports = serverConfig;