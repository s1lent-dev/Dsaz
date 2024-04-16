const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
  problemId: { type: Number, required: true },
  title: { type: String, required: true },
  status: { type: String, default: "pending" },
  isSolvable: { type: Boolean, default: true },
  difficulty: { type: String, required: true },
  article: { type: String },
  leetcode: { type: String },
  gfg: { type: String },
});

const TopicSchema = new mongoose.Schema({
  topicId: { type: Number, required: true },
  topic: { type: String, required: true },
  solved: { type: Number, default: 0 },
  solvedEasy: { type: Number, default: 0 },
  solvedMedium: { type: Number, default: 0 },
  solvedHard: { type: Number, default: 0 },
  totalQues: { type: Number, required: true },
  totalEasy: { type: Number, required: true },
  totalMedium: { type: Number, required: true },
  totalHard: { type: Number, required: true },
  overview: { type: String },
});

const SheetSchema = new mongoose.Schema(
  {
    topic: { type: TopicSchema, required: true },
    problems: [ProblemSchema], // Using the ProblemSchema as a sub-schema
    img: { type: String, default: "" },
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    sheetData: [SheetSchema], // Using the SheetSchema as a sub-schema
  },
  { timestamps: true }
);

// Export both models
const TestSheet = mongoose.model("TestSheet", SheetSchema);
const TestUser = mongoose.model("TestUser", UserSchema);

module.exports = { TestSheet, TestUser };
