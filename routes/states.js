let express = require("express");
let States = require("../models").States;
let VisitedStates = require("../models").States;

let router = express.Router();

// when accessing route /states, get all the 51 states' data and order it by name
router.get("/states", function (req, res, next) {
  States.findAll({ order: ["name"] })
    .then((states) => {
      return res.json(states);
    })
    .catch((err) => next(err));
});

// get all visited states
router.get("/visited-states", function (req, res, next) {
  VisitedStates.findAll({ order: ["name"], where: { visited: true } }).then(
    (visitedStates) => {
      return res.json(visitedStates);
    }
  );
});

// get all info about one state
router.get("/state/:name", function (req, res, next) {
  let stateName = req.params.name;
  States.findOne({ where: { name: stateName } })
    .then((state) => {
      if (state) {
        return res.json(state);
      } else {
        return res.status(404).send("State not found");
      }
    })
    .catch((err) => next(err));
});

// patch route to update a state - visited or not
router.patch("/states/:name", function (req, res, next) {
  // get state name and if checkbox is selected or not
  let stateName = req.params.name;
  let stateVisited = req.body.visited;

  // update visited column on database only for the state called
  States.update({ visited: stateVisited }, { where: { name: stateName } })
    .then((rowsUpdated) => {
      let numberOfRowsUpdated = rowsUpdated[0];
      if (numberOfRowsUpdated == 1) {
        return res.send("Ok");
      }
      return res.status(404).send("State not found");
    })
    .catch((err) => next(err));
});

module.exports = router;
