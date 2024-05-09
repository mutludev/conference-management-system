const Conference = require("../models/conference");
const User = require("../models/user");
const {
  sanitizeConference,
  validateConference,
} = require("../utils/conference");

async function getAll() {
  const conferences = await Conference.find();
  const sanitizedConferences = conferences.map(sanitizeConference);
  return sanitizedConferences;
}

async function getOrganizers(organizerId) {
  const conferences = await Conference.find({ organizer: organizerId });
  const sanitizedConferences = conferences.map(sanitizeConference);
  return sanitizedConferences;
}

async function create(organizer, conference) {
  const validatedConference = validateConference(conference);
  validatedConference.organizer = organizer;
  const newConference = new Conference(validatedConference);
  await newConference.save();
  return sanitizeConference(newConference);
}

async function update(organizer, id, conference) {
  const validatedConference = validateConference(conference);
  const updatedConference = await Conference.findOneAndUpdate(
    { _id: id, organizer },
    validatedConference,
    { new: true }
  );
  if (!updatedConference) {
    throw new Error("Conference not found");
  }
  return sanitizeConference(updatedConference);
}

async function remove(organizer, id) {
  const deletedConference = await Conference.findOneAndDelete({
    _id: id,
    organizer,
  });
  if (!deletedConference) {
    throw new Error("Conference not found");
  }
  return sanitizeConference(deletedConference);
}

async function assign(organizer, id, reviewerEmail) {
  const conference = await Conference.findOne({ _id: id, organizer });
  if (!conference) {
    throw new Error("Conference not found");
  }
  const reviewer = await User.findOne({ email: reviewerEmail });
  if (!reviewer) {
    throw new Error("Reviewer not found");
  }
  if (conference.reviewers.includes(reviewer._id)) {
    throw new Error("Reviewer already assigned");
  }
  conference.reviewers.push(reviewer._id);
  await conference.save();
  return sanitizeConference(conference);
}

module.exports = {
  getAll,
  getOrganizers,
  create,
  update,
  remove,
  assign,
};
