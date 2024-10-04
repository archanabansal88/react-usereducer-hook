import { useReducer } from "react";

const initialState = {
  title: "",
  desc: "",
  price: null,
  category: "",
  hasData: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return {
        ...state,
        [action.inputValue.name]: [action.inputValue.value],
      };
    case "submit":
      return {
        ...state,
        hasData: state.title && state.desc && state.price && state.category,
      };
    default:
      return {
        state,
      };
  }
};

const FormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_input",
      inputValue: { name: name, value: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter name.."
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="desc"
          placeholder="enter desc..."
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="price"
          placeholder="enter price"
          onChange={handleChange}
        ></input>
        <div>Category</div>
        <select name="category" onChange={handleChange}>
          <option value="Nike">Nike</option>
          <option value="Rebok">Rebok</option>
          <option value="Adidas">Adidas</option>
        </select>
        <button>Submit</button>
        {state.hasData ? (
          <div>
            <div>{state.title}</div>
            <p>{state.desc}</p>
            <div>{state.price}</div>
            <div>{state.category}</div>
          </div>
        ) : (
          <div>Please fill all Fields</div>
        )}
      </form>
    </div>
  );
};

export default FormReducer;
