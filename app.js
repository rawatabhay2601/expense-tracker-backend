const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const expenseRoute = require('./routes/expense-routes');
const sequelize = require('./util/database');

app.use(cors());
app.use(bodyParser.json());

app.use(expenseRoute);

sequelize.sync()
    .then( () => app.listen(5000))
    .catch( (err) => console.log(err))