const { Router } = require("express");
const ensureRole = require("../middleware/ensureRole");
const userService = require("../services/user.service");
const router = Router();

router.get("/", ensureRole("admin"), async (req, res) => {
  let result = await userService.getAll();
  res.json(result);
});

router.delete("/:id", ensureRole("admin"), async (req, res) => {
  let id = req.params.id;
  let result = await userService.remove(id);
  res.json(result);
});

router.put("/:id", ensureRole("admin"), async (req, res) => {
  let id = req.params.id;
  let user = req.body;
  let result = await userService.update(id, user);
  res.json(result);
});

module.exports = router;
