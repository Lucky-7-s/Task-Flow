//Imports
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiUrl from "../apiUrls.js";

//Begin the Component and Export
export const Tasks = () => {
  //Variables & useStates
  const [userInput, setUserInput] = useState('');
  const [newTask, setNewTask] = useState([]);
  // const [taskList, setTaskList] = useState(null);
  let userName = useParams();

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  //Add a task to a user's tasks array
  const handleSubmit = (event) => {
    event.preventDefault();
    let newTaskk = (
      {
        "task": userInput,
        "status": "red"
      }
    );

    fetch(`${apiUrl}/user/${userName.userName}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskk),
    })
      .then((response) => response.json())
      // .then((data) => current.push(data))
      .then((data) => {
        console.log(`it worked`, data)
      })
      // .then(() => setTaskList(current))
      .catch(() => {
        console.log("error:");
      });
  };


  //Get the Task List of a specific User and set to taskList
  useEffect(() => {
    fetch(`${apiUrl}/user/${userName.userName}/tasks`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].tasks)
        setUserInput('');
        setNewTask(data);
      })
      .catch(() => console.log("Fetch not working"));
  }, []);

  //Delete Function for removing an item from a User's list
  const deleteItem = (i) => {
    fetch(`${apiUrl}/user/${userName.userName}/task/${i}`, {
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
  // const tasksListed = taskList.map((i) => {
  //   console.log(i.task)
  //   return (
  //     <li>
  //       Hi
  //       {i._id}
  //       {i.task}
  //       <button onClick={() => deleteItem(i.user._id)}>Delete</button>
  //     </li>
  //   );
  // });

  // console.log(newTask[0].tasks)

  // let taskList = newTask[0].tasks;
  // taskList.map((i) => {
  //   return (
  //     <li>{i.task}</li>
  //   )
  // })

  let displayTasks = '';
  if (newTask !== null) {
    displayTasks = (
      <div>
        <li>{newTask}</li>
      </div>
    )
  }

  return (
    <div>
      <h3>Fully immersed. Energized focus. Welcome to the Flow.</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New Task" onChange={handleChange} />
        <input type="submit" value="Add Task" />
      </form>
      <div>
        {displayTasks}
      </div>
    </div>
  );
};
