const { Router } = require("express");
const ensureRole = require("../middleware/ensureRole");
const paperService = require("../services/paper.service");
const router = Router();

router.get("/", ensureRole("author", "reviewer"), async (req, res) => {
  if (req.role === "author") {
    let result = await paperService.getByAuthor(req.session.id);
    return res.json(result);
  } else if (req.role === "reviewer") {
    let result = await paperService.getByReviewer(req.session.id);
    return res.json(result);
  } else {
    throw new Error("Invalid role");
  }
});

router.post("/", ensureRole("author"), async (req, res) => {
  let paper = req.body;
  let result = await paperService.create(req.session.id, paper);
  res.json(result);
});

module.exports = router;
