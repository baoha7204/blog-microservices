const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let id = 0;
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  id++;
  posts[id] = {
    id,
    title,
  };
  console.log(posts[id]);
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
