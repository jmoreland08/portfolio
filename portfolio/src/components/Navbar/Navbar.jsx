import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='nav'>
      <NavLink className="projects" to="/">
        Projects
      </NavLink>

      <NavLink className="about-me" to="/about">
        About Me
      </NavLink>
    </div>
  )
}
