import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }
    case "subtract": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "show":
      return {
        ...state,
        showCount: !state.showCount,
      };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showCount: true,
    error: null,
  });
  return (
    <div className="container">
      <h1>Use Reducer Hook</h1>
      {state.showCount && <h2>Count is {state.count}</h2>}
      {state.error && <h2>{state.error}</h2>}
      <div className="btn-container">
        <button onClick={() => dispatch({ type: "add" })}>Increment</button>
        <button onClick={() => dispatch({ type: "subtract" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "show" })}>Show Count</button>
      </div>
    </div>
  );
};

export default Counter;
