const { Router } = require("express");
const authService = require("../services/auth.service");
const router = Router();

router.post("/login", async (req, res) => {
  req.session.id = null;
  let { email, password } = req.body;
  let result = await authService.login(email, password);
  if (result) {
    req.session.id = result.id;
  }
  res.json(result);
});

router.post("/register", async (req, res) => {
  req.session.id = null;
  let result = await authService.register(req.body);
  req.session.id = result._id;
  res.json(result);
});

router.get("/user", async (req, res) => {
  let result = await authService.getUser(req.session.id);
  res.json(result);
});

router.post("/logout", async (req, res) => {
  req.session.id = null;
  res.json({ message: "Logged out" });
});

module.exports = router;
