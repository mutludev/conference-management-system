const paperService = require("../paper.service");
const Paper = require("../../models/paper");
jest.mock("../../models/paper");

describe("Paper Service", () => {
  describe("getAll", () => {
    it("should return all papers", async () => {
      const expectedPapers = [{ title: "Paper 1" }, { title: "Paper 2" }];
      Paper.find.mockResolvedValue(expectedPapers);

      const papers = await paperService.getAll();

      expect(papers).toEqual(expectedPapers);
    });
  });

  describe("getByAuthor", () => {
    it("should return papers by author", async () => {
      const authorId = "author123";
      const expectedPapers = [{ title: "Paper 1", author: authorId }];
      Paper.find.mockResolvedValue(expectedPapers);

      const papers = await paperService.getByAuthor(authorId);

      expect(papers).toEqual(expectedPapers);
      expect(Paper.find).toHaveBeenCalledWith({ author: authorId });
    });
  });

  describe("getByReviewer", () => {
    it("should return papers by reviewer", async () => {
      const reviewerId = "reviewer123";
      const expectedPapers = [{ title: "Paper 1", reviewers: [reviewerId] }];
      Paper.find.mockResolvedValue(expectedPapers);

      const papers = await paperService.getByReviewer(reviewerId);

      expect(papers).toEqual(expectedPapers);
      expect(Paper.find).toHaveBeenCalledWith({ reviewers: reviewerId });
    });
  });
});
