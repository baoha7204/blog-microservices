import { useEffect, useState } from "react";

import Comment from "./Comment";
import commentsApi from "../../utils/api/commentsApi";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState({});

  const fetchComments = async (id) => {
    const res = await commentsApi.getAllByPost(id);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

  return (
    <ul>
      {Object.values(comments).map((comment) => (
        <Comment key={comment.id} id={comment.id} content={comment.content} />
      ))}
    </ul>
  );
};

export default CommentList;
