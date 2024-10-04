import { useReducer } from "react";

const initialState = {
  post: {},
  loading: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-start":
      return {
        ...state,
        loading: true,
      };
    case "fetch-success":
      return {
        ...state,
        loading: false,
        post: action.postData,
      };
    case "fetch-error":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

const PostReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFetch = () => {
    dispatch({ type: "fetch-start" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetch-success", postData: data }))
      .catch((err) => dispatch({ type: "fetch-error" }));
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Loading..." : state.error ? "got error" : "Got data"}
      </button>
      <p>{state.post?.title}</p>
      {state.error && "There is an error.."}
    </div>
  );
};

export default PostReducer;
