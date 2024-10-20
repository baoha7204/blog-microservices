import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {Object.values(comments).map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
