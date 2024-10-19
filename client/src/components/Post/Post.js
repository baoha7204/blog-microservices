import CommentCreate from "../Comment/CommentCreate";
import CommentList from "../Comment/CommentList";

const Post = ({ id, title, comments }) => {
  return (
    <div className="card" style={{ width: "30%", marginBottom: "20px" }}>
      <div className="card-body">
        <h3>{title}</h3>
        <CommentList comments={comments} />
        <CommentCreate postId={id} />
      </div>
    </div>
  );
};

export default Post;
