import { Link } from "react-router-dom";

function Users() {

    const users = [
        {id: 'alice', name: 'Alice W'},
        {id: 'bob', name: 'Bob M' }
    ]
    return (
        <div>
            <h2>Users List:</h2>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`${user.id}`}>Go to {user.name}s' Profile</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Users