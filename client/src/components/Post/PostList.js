import { useEffect, useState } from "react";
import Post from "./Post";
import queryApi from "../../utils/api/queryApi";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await queryApi.getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostList;
