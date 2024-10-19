const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  res.send(commentByPostId[id] || []);
});

app.get("/posts/:id/comments/:commentId", (req, res) => {
  const { id, commentId } = req.params;
  res.send(commentByPostId[id][commentId] || {});
});

app.post("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const comments = commentByPostId[id] || [];
  const commentId = randomBytes(6).toString("hex");
  comments.push({ id: commentId, content });
  commentByPostId[id] = comments;

  axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: id,
    },
  });
  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("received event", req.body.type);

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
