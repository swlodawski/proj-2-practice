const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exhbs = require('express-handlebars');
const { json } = require('sequelize');

const express = express();

const PORT = process.env.PORT || 3001;

const exhbs = express.create({});

app.engine('handlebars', hbs.engine);
app.set('viewengine', handlbars);

app.use('express', json());
app.use('express', express.urlencoded({extended: true}));

app.use(controllers);

