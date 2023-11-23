import React, { useEffect } from "react";
import { useDispatch } from "react-redux";  
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { useForm } from "./hooks/useForm";
import { logout, register } from "./store/Slice/auth/AuthSlice";
import { registerAuth } from "./store/Slice/auth/Thunks";
import { async } from "q";

export const Registro = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "joan.penna@uao.edu.co",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(email, password));
  };

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (!user) return dispatch(logout());

      dispatch(register({ email: user.email }));
    });
  }, [dispatch]);


  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          onChange={onInputChange}
          value={password}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
};