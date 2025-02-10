const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
const db = require('./models/index')

const app = express();


const setUpAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended : true
    }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async() => {

        if(process.env.DB_SYNC){
            db.sequelize.sync({
                alter : true
            })
        }
        console.log(`Server is running at ${PORT}`);
        
    })
}

setUpAndStartServer();