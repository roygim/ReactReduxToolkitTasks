import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, deleteTaskAsync } from "../state/slices/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleTask(task.id));
  }

  async function handleDelete() {
    const reponse = await dispatch(deleteTaskAsync(task.id))
    console.log(reponse)
    // dispatch(reponse);
  }

  return (
    <li style={{ marginBottom: "10px" }}>
      {task.text}
      <div style={{ display: "flex" }}>
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={task.isComplete}
        />
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
}

export default Task;
