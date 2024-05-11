const paper = require("../paper");

test("Valid Paper", () => {
  const paperData = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(paper.validatePaper(paperData)).toEqual(paperData);
});

test("Error on wrong type", () => {
  const paperData = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: 123,
  };
  expect(() => paper.validatePaper(paperData)).toThrow("Invalid paper data");

  const paperData1 = {
    title: ["Title"],
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData1)).toThrow("Invalid paper data");

  const paperData2 = {
    title: "Title",
    abstract: 123,
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData2)).toThrow("Invalid paper data");

  const paperData3 = {
    title: "Title",
    abstract: "Abstract",
    keywords: "Keyword1",
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData3)).toThrow("Invalid paper data");

  const paperData4 = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: 123,
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData4)).toThrow("Invalid paper data");
});

test("Error on missing required field", () => {
  const paperData = {
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData)).toThrow("Invalid paper data");

  const paperData1 = {
    title: "Title",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData1)).toThrow("Invalid paper data");

  const paperData2 = {
    title: "Title",
    abstract: "Abstract",
    file: "file.pdf",
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData2)).toThrow("Invalid paper data");

  const paperData3 = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    conference: "conferenceId",
  };
  expect(() => paper.validatePaper(paperData3)).toThrow("Invalid paper data");

  const paperData4 = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
  };
  expect(() => paper.validatePaper(paperData4)).toThrow("Invalid paper data");
});

test("Filter private value", () => {
  const paperData = {
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
    private: "private",
  };
  expect(paper.validatePaper(paperData)).toEqual({
    title: "Title",
    abstract: "Abstract",
    keywords: ["Keyword1", "Keyword2"],
    file: "file.pdf",
    conference: "conferenceId",
  });
});
