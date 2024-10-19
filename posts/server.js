const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  res.send(posts[id] || {});
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(6).toString("hex");
  posts[id] = {
    id,
    title,
  };

  axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("received event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
