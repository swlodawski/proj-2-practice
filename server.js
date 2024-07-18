const express = require('express');
// I am importing the expess library for use
const sequelize = require('./config/connection');
// I am importing the sequelize configuration file to connect to my database for use.
const controllers = require('./controllers');
// I am importing the controllers directory and files for use
const exhbs = require('express-handlebars');
// I am importing the express handlebars library for use

const express = express();
// I am setting express as an application to be used.
const PORT = process.env.PORT || 3001;
// I am setting the default post tom 3001 but saying to look for another port if 3001 is in use.
const exhbs = express.create({});
// I am setting express-handlebars as an application to be used.
app.engine('handlebars', hbs.engine);
// I am identifying handlebars as the template engine for html.
app.set('viewengine', handlbars);
// I am setting handlebars as the template engine for html.
app.use('express', json());
// I am setting express as a json object
app.use('express', express.urlencoded({extended: true}));

app.use(controllers);
// I am setting the controllers dir as the application for routes.
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('server started!!');
    })
});
// I am syncing sequelize to listen to the port for activity then log a message server started when the interaction is succesful.