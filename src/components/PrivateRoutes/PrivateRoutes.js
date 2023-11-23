import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { useLocation } from "react-router"
import { RedirectPage } from "../RedirectPage/RedirectPage"

export const PrivateRoutes = ({children}) => {
    const { pathname, search } = useLocation();

    const path = pathname+search;
    localStorage.setItem('lastPath',path??"/")
        
    return localStorage.getItem('user')? children : <RedirectPage/>
}