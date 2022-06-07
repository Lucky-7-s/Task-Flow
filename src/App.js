import "./App.css";
import { Nav } from "./Component/Nav";
import { useEffect, useState } from "react";
import { Signup } from "./Component/Signup";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Tasks } from "./Component/Tasks";
import { Login } from "./Component/Login";
import { Route, Link, Routes } from "react-router";
const bootstrap = require("bootstrap");

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Homepage" element={<Home />} />
        <Route path="/User" element={<Login />} />
        <Route path="/CreateUser" element={<Signup />} />
        <Route path="/user/:id" element={<Tasks />} />
        <Route path="/OurTeam" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
