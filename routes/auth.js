const express = require("express");
const router = express.Router();

// @route    POST api/users
// @desc     Get logged in user
// @access   Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route    POST api/users
// @desc     auth user & get token
// @access   Public
router.post("/", (req, res) => {
  res.send("Log in userr");
});

module.exports = router;
