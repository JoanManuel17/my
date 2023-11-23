import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/config";
import { useForm } from "./hooks/useForm";
import { registerAuth } from "./store/Slice/auth/Thunks";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { login, loginWithGoogle, logout } from "./store/Slice/auth/AuthSlice";

export const Registro = () => {

    const authState = useSelector((state) => state.auth);
    const memoizedAuthState = useMemo(() => authState, [authState]);
    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm({
        email: 'jmpenna17@gmail.com',
        password: '123456'
    });
    
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
    };
    
    const onLoginWithGoogle = () => {
        dispatch(loginWithGoogle());
    };
    
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <h1>Registro</h1>
            <hr/>
            <button onClick={onSubmit} disabled={memoizedAuthState.user}>Login</button>
            <button onClick={onLoginWithGoogle} disabled={memoizedAuthState.user}>Login with Google</button>
            <button onClick={onLogout} disabled={!memoizedAuthState.user}>Logout</button>
        </>
    )
}