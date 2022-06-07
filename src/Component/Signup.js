import React from "react";
import { useState } from "react";

export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [submitUserName, setSubmitUserName] = useState({});

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    setSubmitUserName({
    userName: `${userName}`,
    tasks: []
  })


  return (
    <div>
      <h2>Fully immersed. Energized focus. Welcome to the flow.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
