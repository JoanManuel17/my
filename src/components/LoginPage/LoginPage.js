import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router"

export const LoginPage = ()=>{
    const lastPath = localStorage.getItem('lastPath') || "user/home"
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    
    const onLogin = () => {
        setUser({
            id: new Date().getTime(),
            email: "joan.penna@gmail.com",
            userName: "123456"
        });
        setTimeout(()=>navigate(lastPath, {
            replace: true
        }),500)

        
    }
    
    return <div>
        <h1>Login</h1> 
        <button onClick={ ()=>onLogin()}>Login</button>
    </div>  
}