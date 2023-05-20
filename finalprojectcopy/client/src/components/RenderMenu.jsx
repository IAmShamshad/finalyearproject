import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";


const RenderMenu=({route})=>{
  const { state, dispatch } = useContext(UserContext);  
  const [navChange,setNavchange] = useState(false);
  
  useEffect(()=>{
    setNavchange(state);     
  },[state])
   

  if(navChange){
   
    return (
      <>
        <NavLink className="nav-item nav-link active" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="nav-item nav-link" to="/grievance">
          Grievance
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item nav-link " to="/logout">
          Logout
        </NavLink>
        <NavLink className="nav-item nav-link " to="/chatroom">
          chatroom
        </NavLink>
      </>
    );
  } else {
    
    return (
      <>
        <NavLink className="nav-item nav-link active" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="nav-item nav-link" to="/grievance">
          Grievance
        </NavLink>
        <NavLink className="nav-item nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-item nav-link " to="/signup">
          Signup
        </NavLink>
      </>
    );
  }
}

export default RenderMenu;