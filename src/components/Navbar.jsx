import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-lg bg-white/20 z-50 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `bg-transparent ${isActive ? "text-warning" : "hover:text-warning"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `bg-transparent ${isActive ? "text-warning" : "hover:text-warning"}`
                }
                to="/coffees"
              >
                Coffees
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `bg-transparent ${isActive ? "text-yellow-600" : "hover:text-warning"}`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Coffee Shop</a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `bg-transparent ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                `bg-transparent ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Coffees
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `bg-transparent ${isActive ? "text-warning" : "hover:text-warning"}`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;