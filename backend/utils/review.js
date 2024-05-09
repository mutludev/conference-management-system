const zod = require("zod");

const reviewSchema = zod.object({
  paper: zod.string(),
  comment: zod.string(),
  status: zod.enum(["accepted", "rejected", "needs-revision"]),
});

function validateReview(review) {
  const result = reviewSchema.safeParse(review);
  if (!result.success) {
    throw new Error("Invalid review data");
  }
  return result.data;
}

module.exports = {
  validateReview,
};
