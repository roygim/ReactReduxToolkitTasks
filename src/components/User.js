import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../state/slices/userSlice";

const User = () => {
  const user = useSelector((state) => state.user.data)
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(login(true));
  }

  function handleLogout() {
    dispatch(logout(false));
  }

  return (
    <div style={{ marginBottom: "10px", display: "flex" }}>
      {
        user.isLogin ?
          <>
            {`Hi, ${user.firstName}`}&nbsp;
            <button onClick={handleLogout}>
              logout
            </button>
          </>
          :
          <button onClick={handleLogin}>
            login
          </button>
      }
    </div >
  );
};

export default User;
