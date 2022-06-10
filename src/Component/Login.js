import React from "react";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [submitUserName, setSubmitUserName] = useState();

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmitUserName(userName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <Link to={`../user/${userName}/tasks`}>
          <input type="submit" placeholder="Username" />
        </Link>
      </form>
    </div>
  );
};
//<input type="Submit" value="Login"/>
