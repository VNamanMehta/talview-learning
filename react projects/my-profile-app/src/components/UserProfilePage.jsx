import { useParams } from "react-router-dom"

function UserProfilePage() {
    const users = [
        {id: 'alice', role: 'Frontend dev'},
        {id: 'bob', role: 'Backend dev'}
    ]
    const {userId} = useParams()
    const user = users.find(u => u.id === userId)
    if (!user) {
        return <h2>Not user found</h2>
    }
    return (
        <span>{user.id} works as a {user.role}</span>
    )
}

export default UserProfilePage