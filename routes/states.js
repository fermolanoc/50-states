let express = require("express");
let States = require("../models").States;

let router = express.Router();

// when accessing route /states, get all the 51 states' data and order it by name
router.get("/states", function (req, res, next) {
  States.findAll({ order: ["name"] })
    .then((states) => {
      return res.json(states);
    })
    .catch((err) => next(err));
});

module.exports = router;
