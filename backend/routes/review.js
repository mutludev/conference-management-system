const { Router } = require("express");
const ensureRole = require("../middleware/ensureRole");
const reviewService = require("../services/review.service");
const router = Router();

router.get("/", async (req, res) => {
  let result = await reviewService.getAll();
  res.json(result);
});

router.post("/", ensureRole("reviewer"), async (req, res) => {
  let review = req.body;
  let result = await reviewService.create(req.session.id, review);
  res.json(result);
});

module.exports = router;
