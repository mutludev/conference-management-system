const review = require("../review");

test("Valid Review", () => {
  const reviewData = {
    paper: "paperId",
    status: "accepted",
    comment: "Comment",
  };
  expect(review.validateReview(reviewData)).toEqual(reviewData);
});

test("Invalid Review", () => {
  const reviewData = {
    paper: "paperId",
    status: "invalid",
    comment: "Comment",
  };
  expect(() => review.validateReview(reviewData)).toThrow(
    "Invalid review data"
  );

  const reviewData1 = {
    paper: 123,
    status: "accepted",
    comment: "Comment",
  };
  expect(() => review.validateReview(reviewData1)).toThrow(
    "Invalid review data"
  );

  const reviewData2 = {
    paper: "paperId",
    status: "rejected",
    comment: 0,
  };
  expect(() => review.validateReview(reviewData2)).toThrow(
    "Invalid review data"
  );
});

test("Missing Field", () => {
  const reviewData = {
    status: "accepted",
    comment: "Comment",
  };
  expect(() => review.validateReview(reviewData)).toThrow(
    "Invalid review data"
  );

  const reviewData1 = {
    paper: "paperId",
    comment: "Comment",
  };
  expect(() => review.validateReview(reviewData1)).toThrow(
    "Invalid review data"
  );

  const reviewData2 = {
    paper: "paperId",
    status: "accepted",
  };
  expect(() => review.validateReview(reviewData2)).toThrow(
    "Invalid review data"
  );
});

test("Extra Field", () => {
  const reviewData = {
    paper: "paperId",
    status: "accepted",
    comment: "Comment",
    extra: "field",
  };
  const expectedReviewData = {
    paper: "paperId",
    status: "accepted",
    comment: "Comment",
  };
  expect(review.validateReview(reviewData)).toEqual(expectedReviewData);
});
