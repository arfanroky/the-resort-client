import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container mx-auto  border-2 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Homes</Link>
              </li>
              <li>
                <Link to="/">Experiences</Link>
              </li>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                {user ? (
                  (
                    <Link className="btn btn-secondary" to="/login">
                      Log In
                    </Link>
                  ) && (
                    <Link
                      className="btn btn-primary text-accent"
                      to="/register"
                    >
                      Register
                    </Link>
                  )
                ) : (
                  <button className="btn btn-primary">Sign Out</button>
                )}
              </li>
            </ul>
          </div>
          <p className="ml-5">
            <Link
              to="/"
              className="font-thin text-2xl font-mono text-secondary"
            >
              THE RESORT
            </Link>
          </p>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/">Experiences</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li className="ml-4">
              {user ? (
                (
                  <Link className="btn btn-secondary" to="/login">
                    Log In
                  </Link>
                ) && (
                  <Link className="btn btn-success text-white" to="/register">
                    Register
                  </Link>
                )
              ) : (
                <button className="btn btn-primary">Sign Out</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
