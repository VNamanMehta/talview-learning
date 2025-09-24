import { useEffect, useState } from "react"
import AuthContext from "../Contexts/AuthContext"

function AuthProvider({children}) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user')
        return savedUser ? JSON.parse(savedUser) : null 
    })
    

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        }
        else {
            localStorage.removeItem('user')
        }
    },[user])

    const login = () =>{
        setUser({name: 'Naman Mehta'})
    }

    const logout = () =>{
        setUser(null)
    }

    const value = {user, login, logout}

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider