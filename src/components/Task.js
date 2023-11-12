import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../state/slices/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleTask(task.id));
  }

  function handleDelete() {
    dispatch(deleteTask(task.id));
  }

  return (
    <li style={{ marginBottom: "10px" }}>
      {task.task}
      <div style={{ display: "flex" }}>
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={task.completed}
        />
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
}

export default Task;
