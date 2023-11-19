import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import axios from "axios";

const initialState = {
  data: {
    allTasks: [{ id: v4(), text: "Code something", isComplete: false }],
    isLoaded: false
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: v4(),
        text: action.payload,
        isComplete: false,
      };
      state.data.allTasks.push(newTask);
    },
    toggleTask(state, action) {
      const id = action.payload;
      const index = state.data.allTasks.findIndex((t) => t.id === id);
      state.data.allTasks[index] = {
        ...state.data.allTasks[index],
        isComplete: !state.data.allTasks[index].isComplete,
      };
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.data.allTasks = state.data.allTasks.filter((t) => t.id !== id)
    },
    markAllAsCompleted(state) {
      const notComplete = state.data.allTasks.findIndex((t) => !t.isComplete)
      if (notComplete === -1) {
        state.data.allTasks = state.data.allTasks.map((t) => {
          return { ...t, isComplete: false };
        })
      } else {
        state.data.allTasks = state.data.allTasks.map((t) => {
          return { ...t, isComplete: true };
        })
      }
    },
    deleteCompletedTask(state) {
      state.data.allTasks = state.data.allTasks.filter((t) => !t.isComplete)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTaksAsync.fulfilled, (state, action) => {
        state.data.allTasks = action.payload;
      });

    // builder
    //   .addCase(deleteTaskAsync.fulfilled, (state, action) => {
    //   });
  },
});

export const getAllTaksAsync = createAsyncThunk(
  "tasks/getAllTaksAsync",
  async () => {
    const response = await axios.get("http://localhost:5023/api/Tasks/GetAllTasks");
    return response.data;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "tasks/deleteTaskAsync",
  async (id) => {
    const response = await axios.delete(`http://localhost:5023/api/Tasks/DeleteTask/${id}`);
    // console.log(response)
    return response;
  }
);

export const {
  addTask,
  toggleTask,
  deleteTask,
  markAllAsCompleted,
  deleteCompletedTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
