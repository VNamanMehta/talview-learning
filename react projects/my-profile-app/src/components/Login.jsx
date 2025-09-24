import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import AuthContext from "../Contexts/AuthContext";

function Login() {
    const {user,login} = useContext(AuthContext)
    const nav = useNavigate();
    const loc = useLocation()
    const message = loc.state?.message
    const handleLogin = () => {
        if (true) {
            login()
            alert("Login Successfull")
            nav("/dashboard")
        } 
        
    }

    return (
        <div>
            <h2>Login</h2>
            <button type="button" onClick={handleLogin}>Login</button>
            {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>
    )
}

export default Login