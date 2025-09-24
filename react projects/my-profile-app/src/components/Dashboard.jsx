import { useContext } from "react"
import AuthContext from "../Contexts/AuthContext"

function Dashboard () {
    const {user, login, logout} = useContext(AuthContext)
    return (
        <div>
            <h2>Hello this is the dashboard</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard