import { useEffect, useState } from "react"
import { UserContext } from "./UserContext";


export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(()=>{
        const jsonUser = localStorage.getItem('user')
        if(jsonUser){
            setUser(JSON.parse(jsonUser))
        }
    },[])

    useEffect(()=>{
        if(!user) {
            localStorage.removeItem('user')
        } else {
            localStorage.setItem('user',JSON.stringify(user))
        }
    }, [user])
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}