import React from "react";
import { Route, Link, Routes } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Task Flow</h1>
      <p>
        A flow state can be experienced by anyone in any activity. All it takes
        is the right balance of interest, skill, and challenge, along with a
        clear and realistic goal.
      </p>
      <Link to="/CreateUser">
        <button>Sign Up</button>{" "}
      </Link>
    </div>
  );
};
