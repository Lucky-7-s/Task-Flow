import './App.css';
import { Nav } from './Component/Nav';
import { useEffect, useState } from 'react';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Tasks } from './Component/Tasks';
import { Login } from './Component/Login';
import { Route, Link, Routes } from 'react-router';




function App() {





  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Tasks />
      <Login />
      <Signup />
    
    </div>
  );
}

export default App;
