const Conference = require("../models/conference");
const Paper = require("../models/paper");
const { validatePaper } = require("../utils/paper");
const REVIEWER_COUNT = 3;

async function getAll() {
  const papers = await Paper.find();
  return papers;
}

async function getByAuthor(authorId) {
  const papers = await Paper.find({ author: authorId });
  return papers;
}

async function getByReviewer(reviewerId) {
  const assignedPapers = await Paper.find({
    reviewers: reviewerId,
  });
  return assignedPapers;
}

async function create(id, paper) {
  const validatedPaper = validatePaper(paper);
  const newPaper = new Paper({
    ...validatedPaper,
    author: id,
  });

  const conference = await Conference.findById(validatedPaper.conference);
  const reviewers = conference.reviewers.sort(() => 0.5 - Math.random());
  newPaper.reviewers = reviewers.slice(0, REVIEWER_COUNT);
  await newPaper.save();
  return newPaper;
}

module.exports = {
  getAll,
  getByAuthor,
  getByReviewer,
  create,
};
