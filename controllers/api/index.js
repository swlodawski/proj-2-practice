const router = require('express').Router();
// I am bringing in the express library and creating a route
const Task = require('../../models/Task');
// I am bringing in the task file from the model folder..
router.get('/', async(req, res) => {
    try {
        const allTasks = await Task.findall();

        res.status(200).json(allTasks);
     } catch (err) {res.status(500);

     }  
})
// I am setting a get route to await a request to retrieve and then cycle through the task array and return a succesful
// status code and convert the data to ajson object if no issues when executing otherwise catch and return a 500 error.
router.post('/', async(req, res) => {
    try {
        const newTask = await Task.create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status
// I am setting a post route to snatch the values from the user to allow them to create a new task w name, description and status. Then update the server side data.
        })
        if(newTask) {
            res.status(200).json(newTask);
        }
        } catch (err) {
            res.status(500).json(err);
        }
    })
// I am passing the newly created task as a parameter and setting an error check. If successful return a 200 status otherwise catch and return a 500 status error.
    module.exports = router;
// I am exporting the get and post routes to be used in my application.