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
    notes: { type: String, default: "" },
});

const SheetSchema = new mongoose.Schema({
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
  problems: [ProblemSchema],
  img: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model("Sheet", SheetSchema);
