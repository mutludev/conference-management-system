const { Router } = require("express");
const ensureRole = require("../middleware/ensureRole");
const conferenceService = require("../services/conference.service");
const router = Router();

router.get(
  "/",
  ensureRole("attendee", "author", "reviewer"),
  async (req, res) => {
    let result = await conferenceService.getAll();
    res.json(result);
  }
);

router.get("/organizer", ensureRole("organizer"), async (req, res) => {
  let result = await conferenceService.getOrganizers(req.session.id);
  res.json(result);
});

router.post("/", ensureRole("organizer"), async (req, res) => {
  let conference = req.body;
  let result = await conferenceService.create(req.session.id, conference);
  res.json(result);
});

router.put("/:id", ensureRole("organizer"), async (req, res) => {
  let id = req.params.id;
  let conference = req.body;
  let result = await conferenceService.update(req.session.id, id, conference);
  res.json(result);
});

router.put("/:id/assign", ensureRole("organizer"), async (req, res) => {
  let id = req.params.id;
  let reviewerEmail = req.body.reviewerEmail;
  let result = await conferenceService.assign(
    req.session.id,
    id,
    reviewerEmail
  );
  res.json(result);
});

router.delete("/:id", ensureRole("organizer"), async (req, res) => {
  let id = req.params.id;
  let result = await conferenceService.remove(req.session.id, id);
  res.json(result);
});

module.exports = router;
