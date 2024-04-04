const router = require("express").Router();
const { TestSheet, TestUser } = require("../Models/Test");
const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register

router.post("/testRegister", async (req, res) => {
  try {
    const sheets = await TestSheet.find();
    if (!sheets || sheets.length === 0) {
        return res.status(404).json("Sheets not found");
      }
    const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
    const newUser = new TestUser({
        username: req.body.username,
        email: req.body.email,
        password: encryptedPassword,
        sheetData: sheets
      });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Login

router.post("/testLogin", async (req, res) => {
  try {
    const user = await TestUser.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("Wrong Credentials");
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
    const OriginalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Wrong Credentials");
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.PASS_SECRET,
      { expiresIn: "5d" }
    );
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create
router.post("/testCreate", async (req, res) => {
  try {
    const newSheet = new TestSheet({
      topic: req.body.topic,
      problems: req.body.problems,
      img: req.body.img,
    });
    const sheet = await newSheet.save();
    res.status(201).json(sheet);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

// GET - Get test sheet by topicId
// GET - Get test sheet by topicId
router.get("/testGet/:topicId", async (req, res) => {
  try {
    const user = await TestUser.findOne({
    email: req.query.email,
    "sheetData.topic.topicId": req.params.topicId,
    });
    if (!user) {
      return res.status(404).json({ message: "Sheet not found for the given topic" });
    }
    const sheet = user.sheetData.find((data) => data.topic.topicId === parseInt(req.params.topicId));
    res.status(200).json(sheet);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

// GET - Get all test sheets for the authenticated user
router.get("/testGetAll", async (req, res) => {
  try {
    const user = await TestUser.findOne({ email: req.query.email }); // Use req.query instead of req.body for GET requests
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
router.put("/testUpdate/:topicId/:problemId", async (req, res) => {
  try {
    const user = await TestUser.findOne({
      email: req.query.email,
      "sheetData.topic.topicId": req.params.topicId,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Sheet not found for the given topic" });
    }
    const sheet = user.sheetData.find((data) => data.topic.topicId === parseInt(req.params.topicId));
    const problemIndex = sheet.problems.findIndex(
      (problem) => problem.problemId === parseInt(req.params.problemId)
    );
    if (problemIndex === -1) {
      return res
        .status(404)
        .json({ message: "Problem not found in the sheet" });
    }

    // Update problem status and increment solved counters based on difficulty level
    sheet.problems[problemIndex].status = req.body.status;
    if (
      req.body.status === "solved" &&
      sheet.problems[problemIndex].isSolvable
    ) {
      sheet.topic.solved++;
      sheet.problems[problemIndex].isSolvable = false;
      if (sheet.problems[problemIndex].difficulty === "Easy") {
        sheet.topic.solvedEasy++;
      } else if (sheet.problems[problemIndex].difficulty === "Medium") {
        sheet.topic.solvedMedium++;
      } else if (sheet.problems[problemIndex].difficulty === "Hard") {
        sheet.topic.solvedHard++;
      }
    } else if (
      req.body.status === "pending" &&
      !sheet.problems[problemIndex].isSolvable
    ) {
      // Adjust solved counters accordingly when problem status is changed to pending
      sheet.topic.solved--;
      sheet.problems[problemIndex].isSolvable = true;
      if (sheet.problems[problemIndex].difficulty === "Easy") {
        sheet.topic.solvedEasy--;
      } else if (sheet.problems[problemIndex].difficulty === "Medium") {
        sheet.topic.solvedMedium--;
      } else if (sheet.problems[problemIndex].difficulty === "Hard") {
        sheet.topic.solvedHard--;
      }
    }
    const newUser = await user.save();
    const newSheet = newUser.sheetData.find((data) => data.topic.topicId === parseInt(req.params.topicId)); 
    res.status(200).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
