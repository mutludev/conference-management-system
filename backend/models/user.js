const mongoose = require("mongoose");
//TODO mail unique
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["attendee", "admin", "organizer", "author", "reviewer"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
