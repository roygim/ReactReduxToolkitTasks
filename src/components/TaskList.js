import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { markAllAsCompleted, deleteCompletedTask, getAllTaksAsync } from "../state/slices/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.data.allTasks)
  const usersData = useSelector((state) => state.tasks.users)
  const [hasCompletedTask, setHasCompletedTask] = useState(false)

  useEffect(() => {
    if(usersData) {
      console.log(usersData)
    }    
  }, [usersData])

  useEffect(() => {
    if(tasks) {
      const taskComplete = tasks.findIndex((t) => t.isComplete)
      setHasCompletedTask(taskComplete !== -1)
    }    
  }, [tasks])

  const handleMarkAll = () => {
    dispatch(markAllAsCompleted())
    dispatch(getAllTaksAsync())
  }

  const handleDeleteComleted = () => {
    dispatch(deleteCompletedTask())
  }

  return (
    <div>
      {
        tasks && tasks.length > 0 ?
          <div>
            <button onClick={handleMarkAll}>Mark All As Completed</button>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "14px" }}>
              <button style={{ alignSelf: "end" }} onClick={handleDeleteComleted} disabled={hasCompletedTask ? false : true}>
                delete all marked
              </button>
              <ul style={{ paddingRight: "40px" }}>
                {
                  tasks.map((task, i) => {
                    return <Task task={task} key={i} />
                  })
                }
              </ul>
            </div>
          </div>
          :
          <div style={{ marginTop: "8px" }}>
            No tasks
          </div>
      }
    </div>
  );
};

export default TaskList;
