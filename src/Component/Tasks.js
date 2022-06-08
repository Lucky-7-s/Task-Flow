//Imports
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Begin the Component and Export
export const Tasks = () => {
  //Variables & useStates
  const [userInput, setUserInput] = useState("");
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  let { user } = useParams();

  //Get the Task List of a specific User and set to taskList
  useEffect(() => {
    fetch(`http://localhost:3000/user/${user}`)
      .then((response) => response.json())
      .then((data) => setTaskList(user.tasks))
      .catch(() => console.log("Fetch not working"));
  }, []);

  //Delete Function for removing an item from a User's list
  const deleteItem = (i) => {
    fetch(`http://localhost:3000/user/${user}/{i.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(`it worked`, data))
      .catch(() => {
        console.log("Error:");
      });
  };

  //Map through a users Tasks and return them as List Items with a delete button
  const tasksListed = taskList.map((i) => {
    return (
      <li>
        {i.status}
        {i.task}
        <button onClick={deleteItem(i)}>Delete</button>
      </li>
    );
  });

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  //Add a task to a user's tasks array
  const addTask = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const submitObject = {
        task: albumName,
        status: "red",
      };

      let current = [...displayData];

      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitObject),
      })
        .then((response) => response.json())
        .then((data) => current.push(data.vinyl))
        .then((data) => console.log(`it worked`, data))
        .then(() => setDisplayData(current))
        .catch(() => {
          console.log("Error:");
        });
    };
  };

  return (
    <div>
      <h3>Fully immersed. Energized focus. Welcome to the Flow.</h3>
      {tasksListed}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
