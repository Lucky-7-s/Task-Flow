import React from "react";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <h1>Task Flow</h1>
        <li>
          <Link to="/Homepage"> Home </Link>
        </li>
        <li>
          <Link to="/Login"> Login </Link>
        </li>
        <li>
          <Link to="/CreateUser"> Signup </Link>
        </li>
        <li>
          <Link to="/user/:userName"> Tasks </Link>
        </li>
        <li>
          <Link to="/OurTeam"> About </Link>
        </li>
      </ul>
    </nav>
  );
};
