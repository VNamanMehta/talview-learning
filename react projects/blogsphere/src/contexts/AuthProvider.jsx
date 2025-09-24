import { useCallback, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({children}) {
    const [user,setUser] = useState(() => {
        const savedSession = localStorage.getItem('blogsphere_session')
        return savedSession? JSON.parse(savedSession) : null
    })

    useEffect(() => {
        if(user) {
            localStorage.setItem('blogsphere_session', JSON.stringify(user))
        }
        else {
            localStorage.removeItem('blogsphere_session')
        }
    },[user])

    const signup = useCallback(async (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('blogsphere_users')) || []
        if (users.find(u => u.email === email)) {
            throw new Error("User with this email already exists")
        }
        const hashedPassword = password+ '_hash'
        const newUser = {id: Date.now(), name, email, password: hashedPassword}
        localStorage.setItem('blogsphere_users',JSON.stringify([...users, newUser]))
        const {password: _, ...setUserState} = newUser
        setUser(setUserState)
        console.log("User Successfully Registered", newUser)
    }, [])

    const login = useCallback(async (email, password) => {
        const users = JSON.parse(localStorage.getItem('blogsphere_users')) || []
        const foundUser = users.find(u => u.email === email)
        const hashedPassword = password + '_hash'
        if (foundUser && foundUser.password === hashedPassword) {
            const {password: _, ...setUserState} = foundUser
            setUser(setUserState)
            console.log("User logged in", setUserState)
            return setUserState
        } else {
            throw new Error("Invalid username or password")
        }
    }, [])

    const logout = useCallback(() => {
        setUser(null)
        console.log('User Logged Out')
    },[])

    const value = {user, login, logout, signup}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider