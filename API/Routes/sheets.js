const router = require('express').Router();
const Sheet = require('../Models/Sheet');

// Create
router.post('/create', async (req, res) => {
    
    try {
        const newSheet = new Sheet({
            topicId: req.body.topicId,
            topic: req.body.topic,
            problem: req.body.problem,
            img: req.body.img,
            solved: req.body.solved,
            totalQues: req.body.totalQues,
            easy: req.body.easy,
            medium: req.body.medium,
            hard: req.body.hard,
            overview: req.body.overview
        });
        const sheet = await newSheet.save();
        res.status(201).json(sheet);
    } catch(error){
        console.log("error",error);
        res.status(500).send("Server Error 500")
    }
});

// Get 
router.get('/get/:topicId', async (req, res) => {
    try {
        const sheet = await Sheet.findOne({topicId: req.params.topicId});
        res.status(200).json(sheet);
    } catch(error){
        res.status(500).send("Server Error");
    }
})

// Get All
router.get('/getAll', async (req, res) => {
    try {
        const sheet = await Sheet.find();
        res.status(200).json(sheet);
    } catch(error){
        res.status(500).send("Server Error");
    }
})

module.exports = router;