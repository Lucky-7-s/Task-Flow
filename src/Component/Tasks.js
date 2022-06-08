//Imports
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiUrl from "../apiUrls.js";

//Begin the Component and Export
export const Tasks = () => {
  //Variables & useStates
  const [userInput, setUserInput] = useState("");
  let setTask = "";
  const [taskList, setTaskList] = useState([]);
  let userName = useParams();
  

  //Get the Task List of a specific User and set to taskList
  useEffect(() => {
    fetch(`${apiUrl}/user/${userName.userName}`)
      .then((response) => response.json())
      .then((data)=>console.log(data))
      .then((data) => setTaskList(data[0].tasks))
      .catch(() => console.log("Fetch not working"));
  }, []);

  //Delete Function for removing an item from a User's list
  const deleteItem = (i) => {
    fetch(`${apiUrl}/tasks/task/${i.id}`, {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    setTask = {
      task: userInput,
      status: "yellow"
      
    };

    let current = [...taskList];

    fetch(`${apiUrl}/user/${userName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setTask),
    })
      .then((response) => response.json())
      .then((data) => current.push(data))
      .then((data) => console.log(`it worked`, data))
      .then(() => setTaskList(current))
      .catch(() => {
        console.log("error:");
      });
  };

  return (
    <div>
      <h3>Fully immersed. Energized focus. Welcome to the Flow.</h3>
      {tasksListed}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New Task" onChange={handleChange} />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};
