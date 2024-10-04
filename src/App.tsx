import React from "react";
import "./App.css";
import Counter from "./components/counter";
import PostState from "./components/posts-usestate";
import PostReducer from "./components/posts-usereducer";
import FormReducer from "./components/form-reducer";

function App() {
  return (
    <div className="App">
      <Counter />
      <PostState />
      <PostReducer />
      <FormReducer />
    </div>
  );
}

export default App;
