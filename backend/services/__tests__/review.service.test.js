const reviewService = require("../review.service");
const Paper = require("../../models/paper");

jest.mock("../../models/paper");

describe("Review Service", () => {
  describe("create", () => {
    it("should create a review", async () => {
      const reviewData = {
        paper: "paperId",
        status: "accepted",
        comment: "Comment",
      };
      const paper = {
        reviewers: ["reviewerId"],
        reviews: [],
        save: jest.fn(),
      };
      Paper.findById.mockResolvedValue(paper);
      const result = await reviewService.create("reviewerId", reviewData);
      expect(result).toEqual(paper);
      expect(paper.reviews).toEqual([
        {
          reviewer: "reviewerId",
          comment: "Comment",
          status: "accepted",
        },
      ]);
    });

    it("should throw an error if paper is not found", async () => {
      const reviewData = {
        paper: "paperId",
        status: "accepted",
        comment: "Comment",
      };
      Paper.findById.mockResolvedValue(null);
      await expect(
        reviewService.create("reviewerId", reviewData)
      ).rejects.toThrow("Paper not found");
    });

    it("should throw an error if reviewer is not a reviewer for the paper", async () => {
      const reviewData = {
        paper: "paperId",
        status: "accepted",
        comment: "Comment",
      };
      const paper = {
        reviewers: [],
      };
      Paper.findById.mockResolvedValue(paper);
      await expect(
        reviewService.create("reviewerId", reviewData)
      ).rejects.toThrow("You are not a reviewer for this paper");
    });
  });
});
