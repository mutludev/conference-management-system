const { Router } = require("express");
const express = require("express");
const ensureRole = require("../middleware/ensureRole");
const paperService = require("../services/paper.service");
const router = Router();
const path = require("path");

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

router.use(
  "/",
  express.static(path.join(path.dirname(process.argv[1]), "uploads"))
);

// router.get("/:id", async (req, res) => {
//   var options = {
//     root: path.join(path.dirname(process.argv[1]), "uploads"),
//   };

//   var fileName = req.params.id;
//   res.sendFile(fileName, options, function (err) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log("Sent:", fileName);
//     }
//   });
// });

module.exports = router;
