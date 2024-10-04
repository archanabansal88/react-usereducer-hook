import { useState } from "react";

const PostState = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {loading ? "Loading..." : "Get data"}
      </button>
      <p>{post.title}</p>
      {error ? "there is an error" : null}
    </div>
  );
};

export default PostState;
