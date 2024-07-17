const router = require('express').Router();
// Passing in the express library and setting router as a variable
const api = require('./api');
// passing in the api dir 
const Task = require('../models/Task');
// Passing in the models folder and Task file to be used.

router.use('/api', api);
// Using router as an application

router.get('/', async(req, res) => {
    const allTasks = await Task.findall();
    const sanitizeData = allTasks.map((task) => {
        return task.get({plain: true});
    })
})
// Setting get route to await for user input to create a task and then cycling through the task array and converting
// the sequelizxe object to a js object then returning that js object.
res.render('todo', {sanitizeData});

// Then rendering the newly converted js todo object


module.exports(router);

// Exporting router logic to rest of application