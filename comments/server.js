const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let commentId = 0;
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
  commentId++;
  comments.push({ id: commentId, content });
  commentByPostId[id] = comments;
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
