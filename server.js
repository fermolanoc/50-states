let express = require("express");
let states_api = require("./routes/states");
let path = require("path");

let app = express();

let VueAppPath = path.join(__dirname, "client", "dist");
app.use(express.static(VueAppPath));

app.use(express.json());

// after api complete url with states to retrieve data stored there (List of states with details on routes/states.js)
app.use("/api", states_api);

// return message for pages not found
app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

// return message for server/connection errors
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send("Server error");
});

let server = app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port", server.address().port);
});
