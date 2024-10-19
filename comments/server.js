const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let commentId = 0;
const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  res.send(commentByPostId[id] || []);
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
