import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [counter, setCounter] = useState();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <div className="container">
          <NavLink className="navbar-brand" to="">
            MovieMight
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link "
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="movies"
                    >
                      Movie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="Laptop"
                    >
                      2
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="tv"
                    >
                      3
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link "
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tv Shows
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="mobile"
                    >
                      1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="Laptop"
                    >
                      2
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="tv"
                    >
                      3
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link "
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  People
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="mobile"
                    >
                      1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="Laptop"
                    >
                      2
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="tv"
                    >
                      3
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="mobile"
                    >
                      Mobile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="Laptop"
                    >
                      Laptop
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-white text-dark"
                      to="tv"
                    >
                      TV
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {null === null ? (
                <>
                  <NavLink className="nav-link " to="login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" to="register">
                    Register
                  </NavLink>
                </>
              ) : (
                <button className="btn nav-link" onClick={logout}>
                  Logout{" "}
                </button>
              )}
              <div className="bg-body-secondary rounded-5    pt-2 ">
                <i className="fa mx-2 fa-search "></i>
              </div>

            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
