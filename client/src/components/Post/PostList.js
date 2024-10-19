import { useEffect, useState } from "react";
import postsApi from "../../utils/api/postsApi";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await postsApi.getAll();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  );
};

export default PostList;
