import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoutes ({children}) {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if (!user) {
        return <Navigate to={'/login'} state={{from: location}} replace />
    } 

    return children
}

export default ProtectedRoutes