import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  data: { id: -1, firstName: "", lastName: "", isLogin: false }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      if (state.data.id === -1) {
        state.data = { id: v4(), firstName: "Roei", lastName: "Grumet", isLogin: true }
      }
    },
    logout(state) {
      if (state.data.id !== -1) {
        state.data = { id: -1, firstName: "", lastName: "", isLogin: false }
      }
    }
  },
});

export const {
  login,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
