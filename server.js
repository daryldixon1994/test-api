const express = require("express");
const app = express();

// rest api server

let users = [
  {
    userName: "Joshua Blake",
    email: "rec@ubmemi.uk",
    password: "ybsId1vY5",
  },
  {
    userName: "Abbie Lee",
    email: "kaali@ocufuwu.mq",
    password: "9GBw1CyJ9Bh",
  },
  {
    userName: "Mable Leonard",
    email: "ohfocfif@avjo.zm",
    password: "lBnDnFJpjfqXWTvA09",
  },
];

app.get("/api/users", (req, res) => {
  res.json({ status: true, data: users });
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("SERVER IS UP AND RUNNING ON PORT 5000");
});
