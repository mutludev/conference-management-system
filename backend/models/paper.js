const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    paper: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paper",
    },
    comment: String,
    status: {
      type: String,
      enum: ["accepted", "rejected", "needs-revision"],
    },
  },
  { timestamps: true }
);

const paperSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: String,
    abstract: String,
    keywords: [String],
    file: String,
    conference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conference",
    },
    reviewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const Paper = mongoose.model("Paper", paperSchema);

module.exports = Paper;
