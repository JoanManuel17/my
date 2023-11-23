import React, { useContext } from "react";
import { NavComponent } from "./NavComponent";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {
  let { isLoggedIn } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(isLoggedIn);

  const logOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <NavComponent />
      <h1>HOLA</h1>
      <h3> {`User: ${user.user}`} </h3>
      <h3> {`Password: ${user.password}`} </h3>
      <button onClick={() => logOut()}> SALI </button>
    </div>
  );
};

