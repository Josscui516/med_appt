import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const email = sessionStorage.getItem("email");
  const username = email ? email.split("@")[0] : "";

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  const handleClick = () => {
    const navLinks = document.querySelector(".nav__links");
    const navIcon = document.querySelector(".nav__icon i");

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-times");
    } else {
      navIcon.classList.remove("fa-times");
      navIcon.classList.add("fa-bars");
    }
  };

  return (
    <nav>

      <div className="nav__logo">
        <Link to="/">StayHealthy</Link>
        <span>.</span>
      </div>

      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      <ul className="nav__links active">

        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <a href="#">Appointments</a>
        </li>

        <li className="link">
            <Link to="/instant-consultation">
                <button className="instant-btn">Instant Consultation</button>
            </Link>
        </li>

        {!email && (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>

            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}

        {email && (
          <>
            <li className="link">
              <span className="username">
                Welcome,{username}
              </span>
            </li>

            <li className="link">
              <button className="btn1" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;