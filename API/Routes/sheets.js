const router = require("express").Router();
const Sheet = require("../Models/Sheet");
const verify = require("../verifyToken");
// Create
router.post("/create", async (req, res) => {
  try {
    const newSheet = new Sheet({
      topicId: req.body.topicId,
      topic: req.body.topic,
      problem: req.body.problem,
      img: req.body.img,
      solved: req.body.solved,
      totalQues: req.body.totalQues,
      easy: req.body.easy,
      totalEasy: req.body.totalEasy,
      medium: req.body.medium,
      totalMedium: req.body.totalMedium,
      hard: req.body.hard,
      totalHard: req.body.totalHard,
      overview: req.body.overview,
    });
    const sheet = await newSheet.save();
    res.status(201).json(sheet);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Server Error 500");
  }
});

// Get
router.get("/get/:topicId", verify, async (req, res) => {
  try {
    const sheet = await Sheet.findOne({
      user: req.user._id,
      topicId: req.params.topicId,
    });
    res.status(200).json(sheet);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Get All
router.get("/getAll", verify, async (req, res) => {
  try {
    const sheets = await Sheet.find({ user: req.user._id });
    res.status(200).json(sheets);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Server Error");
  }
});

// Update
router.put("/update/:topicId/:problemId", verify, async (req, res) => {
  try {
    // Step 1: Find the sheet based on the topicId provided in the params
    const sheet = await Sheet.findOne({ topicId: req.params.topicId, user: req.user._id });

    if (!sheet) {
      return res.status(404).json({ message: "Sheet not found for the given topic" });
    }

    // Step 2: Find the problemId in the problem array in that sheet
    const problemIndex = sheet.problem.findIndex(
      problem => problem.problemId === parseInt(req.params.problemId)
    );
    if (problemIndex === -1) {
      return res.status(404).json({ message: "Problem not found in the sheet" });
    }

    // Step 3: Update the status of that particular problem to req.body.status
    sheet.problem[problemIndex].status = req.body.status;

    // Step 4: Increment/decrement the solved number in the sheet based on req.body.status
    if (req.body.status === "solved" && !sheet.problem[problemIndex].isSolvable) {
      sheet.solved += 1;
      sheet.problem[problemIndex].isSolvable = true;
      if (req.body.difficulty === "Easy") {
        sheet.easy += 1;
      } else if (req.body.difficulty === "Medium") {
        sheet.medium += 1;
      } else if (req.body.difficulty === "Hard") {
        sheet.hard += 1;
      }
    } else if (req.body.status === "pending" && sheet.problem[problemIndex].isSolvable) {
      sheet.problem[problemIndex].isSolvable = false;
      sheet.solved -= 1;
      if (req.body.difficulty === "Easy") {
        sheet.easy -= 1;
      } else if (req.body.difficulty === "Medium") {
        sheet.medium -= 1;
      } else if (req.body.difficulty === "Hard") {
        sheet.hard -= 1;
      }
    } 

    // Step 5: Increment easy, medium, hard members of sheet based on req.body.status and req.body.difficulty

    // Step 6: Save the updated sheet and return the response
    const updatedSheet = await sheet.save();
    res.status(200).json(updatedSheet);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});



module.exports = router;
