const express = require("express");
const app = express();
const a = {};
console.log(a);
app.get("/add", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(3000);
