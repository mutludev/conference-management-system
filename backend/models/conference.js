const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  date: Date,
  location: String,
  reviewers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [String],
});

const Conference = mongoose.model("Conference", conferenceSchema);

module.exports = Conference;
