import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../state/slices/tasksSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask(inputVal));
    setInputVal("");
  }

  return (
    <div style={{ marginBottom: "18px" }}>
      <form onSubmit={handleSubmit}>
        <input value={inputVal} onChange={handleInputChange} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
