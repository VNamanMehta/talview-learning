import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({children}) {
    const {user} = useContext(AuthContext)
    if(!user) {
        return <Navigate to={'/login'} state={{message: "Please Login first"}} />
    }
    return children
}

export default ProtectedRoute