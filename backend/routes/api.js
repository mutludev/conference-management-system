const { Router } = require("express");
const router = Router();

router.use("/user", require("./user"));
router.use("/auth", require("./auth"));
router.use("/conference", require("./conference"));
router.use("/paper", require("./paper"));
router.use("/review", require("./review"));

module.exports = router;
