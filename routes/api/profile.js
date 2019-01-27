const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//@route Get api/profile/test
//@desc Tests profile route
//@access Public

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
