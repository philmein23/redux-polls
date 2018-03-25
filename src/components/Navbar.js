import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leadership">Leaderboard</Link>
        </li>
        <li>
          <Link to="/about">Add a Poll</Link>
        </li>
      </ul>
    </nav>
  );
}
