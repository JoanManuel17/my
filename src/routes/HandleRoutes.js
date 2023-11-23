import { Routes, Route } from "react-router-dom"
import { AboutPage, Handle404, LoginPage, MainPage } from "../components/Index"
import { NavComponent } from "../shared/NavComponent/NavComponent"
import { PrivateRoutes } from "../components/PrivateRoutes/PrivateRoutes"
import { UserRoutes } from "./UserRoutes"

export const HandleRoutes = ()=>{

    return <>
        <NavComponent/>
        <Routes >
            <Route path="/" element={<MainPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="user/*" element={
                <PrivateRoutes>
                    <UserRoutes/>
                </PrivateRoutes>
            }/>
            <Route path="/*" element={<Handle404/>}/>
        </Routes>
    </>
}