const router = require("express").Router();
const User = require("../Models/User");
const Sheet = require("../Models/Sheet");
const verify = require("../verifyToken");
// Create
router.post("/create", async (req, res) => {
  try {
    const sheet = new Sheet({
      topicId: req.body.topicId,
      topic: req.body.topic,
      solved: 0,
      solvedEasy: 0,
      solvedMedium: 0,
      solvedHard: 0,
      totalQues: req.body.totalQues,
      totalEasy: req.body.totalEasy,
      totalMedium: req.body.totalMedium,
      totalHard: req.body.totalHard,
      overview: req.body.overview,
      problems: req.body.problems,
      img: req.body.img,
    });
    const newSheet = await sheet.save();
    res.status(201).json(newSheet);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Server Error 500");
  }
});

// Get Sheets
router.get("/getSheets", async (req, res) => {
  try {
    const sheets = await Sheet.find();
    res.status(200).json(sheets);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Server Error 500");
  }
});

// Get
router.get("/get/:topicId", verify, async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.query.email,
      "sheetData.topicId": req.params.topicId,
    });
    if (!user) {
      return res.status(404).json({ message: "Sheet not found for the given topic" });
    }
    const sheet = user.sheetData.find((data) => data.topicId === parseInt(req.params.topicId));
    if (!sheet) {
      return res.status(404).json({ message: "Sheet not found for the given topicId" });
    }
    res.status(200).json(sheet);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});


// Get All
router.get("/getAll", verify, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email }); // Use req.query instead of req.body for GET requests
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const sheets = user.sheetData;
    res.status(200).json(sheets); // Return sheet data instead of user object
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

// Update
router.put("/update/:topicId/:problemId", verify,  async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.query.email,
      "sheetData.topicId": req.params.topicId,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Sheet not found for the given topic" });
    }
    const sheet = user.sheetData.find((data) => data.topicId === parseInt(req.params.topicId));
    const problemIndex = sheet.problems.findIndex(
      (problem) => problem.problemId === parseInt(req.params.problemId)
    );
    if (problemIndex === -1) {
      return res
        .status(404)
        .json({ message: "Problem not found in the sheet" });
    }
    const problem = sheet.problems[problemIndex];
    // Update problem status and increment solved counters based on difficulty level
    problem.status = req.body.status;
    if (
      req.body.status === "solved" &&
      problem.isSolvable
    ) {
      sheet.solved++;
      problem.isSolvable = false;
      if (problem.difficulty === "Easy") {
        sheet.solvedEasy++;
      } else if (problem.difficulty === "Medium") {
        sheet.solvedMedium++;
      } else if (problem.difficulty === "Hard") {
        sheet.solvedHard++;
      }
    } else if (
      req.body.status === "pending" &&
      !problem.isSolvable
    ) {
      // Adjust solved counters accordingly when problem status is changed to pending
      sheet.solved--;
      problem.isSolvable = true;
      if (problem.difficulty === "Easy") {
        sheet.solvedEasy--;
      } else if (problem.difficulty === "Medium") {
        sheet.solvedMedium--;
      } else if (problem.difficulty === "Hard") {
        sheet.solvedHard--;
      }
    }
    const newUser = await user.save(); 
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

router.put("/updateNotes/:topicId/:problemId", verify, async (req, res) => {
  try{
    const user = await User.findOne({
      email: req.query.email,
      "sheetData.topicId": req.params.topicId,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Sheet not found for the given topic" });
    }
    const sheet = user.sheetData.find((data) => data.topicId === parseInt(req.params.topicId));
    const problemIndex = sheet.problems.findIndex(
      (problem) => problem.problemId === parseInt(req.params.problemId)
    );
    if (problemIndex === -1) {
      return res
        .status(404)
        .json({ message: "Problem not found in the sheet" });
    }
    const problem = sheet.problems[problemIndex];
    problem.notes = req.body.notes;
    const newUser = await user.save();
    res.status(200).json(newUser);
  }catch{
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
