import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

function Auth() {
    const {user, login, logout} = useContext(AuthContext)

    return (
        <div>
            {user ? (
                <>
                    <span>{user.name}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ): (
                <>
                    <span>Please Log In </span>
                    <button onClick={login}>Login</button>
                </>
                
            )}
        </div>
    )
}

export default Auth