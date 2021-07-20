import React from "react";
import { withRouter } from "react-router-dom";
import './logout.scss'
export const Logout = withRouter(({ history }) => {
  return (
    <button id="logout_btn"
      onClick={() => {
        history.push("/");
      }}
    >
      Logout
    </button>
  );
});
