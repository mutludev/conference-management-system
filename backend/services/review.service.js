const Paper = require("../models/paper");
const { validateReview } = require("../utils/review");

async function getAll() {
  return "Get all reviews route";
}

async function create(id, review) {
  review = validateReview(review);
  const paper = await Paper.findById(review.paper);
  if (!paper) {
    throw new Error("Paper not found");
  }
  if (paper.reviewers.indexOf(id) === -1) {
    throw new Error("You are not a reviewer for this paper");
  }
  paper.reviews.push({
    reviewer: id,
    comment: review.comment,
    status: review.status,
  });
  await paper.save();
  return paper;
}

module.exports = {
  getAll,
  create,
};
