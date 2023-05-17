import React from "react";
import { Link, NavLink } from "react-router-dom";
import {GiStarfighter} from "react-icons/gi"

const Header = () => {
  return (
    <header>
      <div className="navbar py-9 container bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">
            <p className="text-5xl"><GiStarfighter></GiStarfighter></p>
            <h4>Super Hero Hub</h4>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-6">
            <li><NavLink className="text-lg font-medium">Home</NavLink></li>
            <li><NavLink className="text-lg font-medium">All Toys</NavLink></li>
            <li><NavLink className="text-lg font-medium">My Toys</NavLink></li>
            <li><NavLink className="text-lg font-medium">Add A Toy</NavLink></li>
            <li><NavLink className="text-lg font-medium">Blogs</NavLink></li>
            <li><NavLink className="text-lg font-medium">Login</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
