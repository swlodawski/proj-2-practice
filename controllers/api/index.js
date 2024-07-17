const router = require('express').Router();
const Task = require('../../models/Task');

router.get('/', async(req, res) => {
    try {
        const allTasks = await Task.findall();

        res.status(200).json(allTasks);
     } catch (err) {res.status(500);

     }  
})

router.post('/', async(req, res) => {
    try {
        const newTask = await Task.create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status
        })
        if(newTask) {
            res.status(200).json(newTask);
        }
        } catch (err) {
            res.status(500).json(err);
        }
    })

    module.exports = router;