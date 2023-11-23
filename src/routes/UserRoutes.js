import { Routes, Route } from "react-router-dom"
import { HomePage, ProfilePage } from "../components"

export const UserRoutes = ()=>{
    
    return <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path=":username" element={<ProfilePage/>}/>
        </Routes>
    </>
}