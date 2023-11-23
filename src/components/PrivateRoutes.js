import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavComponent } from "../pages/NavComponent.js";

export const PrivateRoutes = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", `${pathname}${search}`);

	const goToLogIn = () => {
		navigate("/login");
	};

	return isLoggedIn ? (
		children
	) : (
		<>
			<NavComponent />
			<h1>HOLI</h1>
			<h2>DESLOGUEATE</h2>
			<button onClick={() => goToLogIn()}> metele</button>
		</>
	);
};