import React from "react";
import { useState } from "react";
import { apiUrls } from "../apiUrls.js";
import { Route, Link, Routes } from "react-router-dom";

export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [submitUserName, setSubmitUserName] = useState({});

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmitUserName({
      username: `${userName}`,
    });

    fetch(`{ apiUrls }/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitUserName),
    })
      .then((response) => response.json())
      .then((data) => console.log(`it worked`, data))
      .catch(() => {
        console.log("Error:");
      });
  };

  return (
    <div>
      <h2>Fully immersed. Energized focus. Welcome to the flow.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <Link to={`/Login`}>
          <input type="submit" value="Sign Up" />
        </Link>
      </form>
    </div>
  );
};
