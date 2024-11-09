const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.listen(port);

app.get("/getBtata", (req, res) => {
  res.status(200).json({
    name: "btata",
    price: "5$",
  });
});

app.post("/user", (req, res) => {
  if (req.body.grade > 90) {
    res.status(200).json({
      name: req.body.name,
      type: "SHATOOR",
    });
  } else {
    res.status(200).json({
      name: req.body.name,
      type: "TEES",
    });
  }
});

module.exports = server;
