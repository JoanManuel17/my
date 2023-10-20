import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    setUser({ id: 123, name: "Joan", email: "joanpenna17@gmail.com" });

    const lastPath = localStorage.getItem("lastPath") || "/";
    navigate(lastPath, { replace: true });
  };

  return (
    <>
      <div> Login Page</div>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => onLogin}>
        Login
      </button>
    </>
  );
};
