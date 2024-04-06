const router = require('express').Router();
const User = require('../Models/User');
const Sheet = require('../Models/Sheet');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

// Register

router.post("/register", async (req, res) => {
    try {
      const sheets = await Sheet.find();
      if (!sheets || sheets.length === 0) {
          return res.status(404).json("Sheets not found");
        }
      const encryptedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
      const newUser = new User({
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

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
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

module.exports = router;