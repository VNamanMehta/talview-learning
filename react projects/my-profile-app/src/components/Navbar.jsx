import { Link } from "react-router-dom"


function Navbar () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/header">Header</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/users'>User List</Link>
            <Link to='/login'>Login</Link>
            <Link to='dashboard'>Dashboard</Link>
        </nav>
    )
}

export default Navbar