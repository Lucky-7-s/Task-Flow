import "./App.css";
import { Nav } from "./Component/Nav";
import { useEffect, useState } from "react";
import { Signup } from "./Component/Signup";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Tasks } from "./Component/Tasks";
import { Login } from "./Component/Login";
import { BrowserRouter as router } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";
const bootstrap = require("bootstrap");

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateUser" element={<Signup />} />
        <Route path="/user/:userName/tasks" element={<Tasks />} />
        <Route path="/OurTeam" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
