import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import RenderMenu from "./RenderMenu";
import { useLocation } from 'react-router-dom'


const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Grievance Portal
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto"><RenderMenu route={location.pathname}></RenderMenu></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
