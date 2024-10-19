import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {Object.values(comments).map((comment) => (
        <Comment key={comment.id} id={comment.id} content={comment.content} />
      ))}
    </ul>
  );
};

export default CommentList;
