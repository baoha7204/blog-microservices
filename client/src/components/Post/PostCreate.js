import { useState } from "react";
import postsApi from "../../utils/api/postsApi";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postsApi.create(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          value={title}
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PostCreate;
