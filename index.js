const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.json({ info: "Node.js and Express" });
});

app.get("/assesment", (request, response) => {
  response.json({
    tervehdys: "Jaseon morjesta taas Samu ja Anssi!",
    huomio: "tervehdys sisälsi sanaleikin",
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
