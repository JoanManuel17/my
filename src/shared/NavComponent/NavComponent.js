import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"

export const NavComponent = ()=>{

    const { user, setUser } = useContext(UserContext)

    const onLogOut = () =>{
        setUser(null)
        useNavigate("login", {replace: true})
    }

    return <>
        <div className={styles.Container}>
            <div>
                <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="/">Main</NavLink>
                <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="about">About</NavLink>
            </div>
            {user?<div>
                    <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="user/">Intro</NavLink>
                    <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to={`user/${user?.userName}`}>Profile</NavLink>
                    <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link}  onClick={()=>onLogOut()} to="login">Log Out</NavLink>
                </div>:<div>
                    <NavLink className={(param)=>param.isActive?styles.Link:styles.Active_Link} to="login">Login</NavLink>
                </div>}
            <hr className={styles.Divisor}/>
            <div className={styles.Component_Title}>
                <span className={styles.Title}>Fake Login</span>
            </div>
        </div>
    </>
}