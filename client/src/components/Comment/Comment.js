const Comment = ({ id, comment }) => {
  let actualContent;
  const { content, status } = comment;
  if (status === "approved") {
    actualContent = content;
  }
  if (status === "pending") {
    actualContent = "This comment is awaiting moderation";
  }
  if (status === "rejected") {
    actualContent = "This comment has been rejected";
  }
  return <li>{actualContent}</li>;
};

export default Comment;
