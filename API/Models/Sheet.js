const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    problemId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    status: { type: String, required: true },
    difficulty: { type: String, required: true },
    article: { type: String },
    leetcode: { type: String },
    gfg: { type: String }
});

const SheetSchema = new mongoose.Schema({
    topicId: { type: Number, required: true, unique: true},
    topic: { type: String, required: true },
    problem: [ProblemSchema], // Using the ProblemSchema as a sub-schema
    img: { type: String },
    solved: { type: Number, required: true },
    totalQues: { type: Number, required: true },
    easy: { type: Number, required: true },
    totalEasy: { type: Number, required: true },
    medium: { type: Number, required: true },
    totalMedium: { type: Number, required: true },
    hard: { type: Number, required: true },
    totalHard: { type: Number, required: true },
    overview: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Sheet", SheetSchema);
