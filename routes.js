const router = require('express').Router();
const path = require('path');
const {Workout} = require("./models"); //Workout.method

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'))
} )
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'))
} )

router.get('/api/workouts', (req, res) => {
    Workout.find({}).then(response=> res.json(response))
})

router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).then(response=> res.json(response))
})

router.post('/api/workouts', (req, res) => {
    Workout.create({}).then(response => res.json(response))
})

router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id}, 
        {
            $push: {exercises: req.body}
        }).then(response => res.json(response))
})
 
module.exports = router;