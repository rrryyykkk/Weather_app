const express = require("express");

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cities", require("../api/cities.api"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
