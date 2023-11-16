const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const auth = require("./auth.route");

router.use(morgan("dev"));
router.use("/auth", auth);

module.exports = router;
