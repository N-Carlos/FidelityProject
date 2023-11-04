const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "usertwo", "userthree"] });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
