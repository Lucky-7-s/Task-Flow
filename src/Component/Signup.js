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
    });

    fetch(`http://localhost3000/user`, {
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
        <input type="submit" />
      </form>
    </div>
  );
};
