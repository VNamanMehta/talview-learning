import { useState } from "react"

const Login = () => {
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.length<=1) {
            setError("Name should be more than a single letter")
        } else {
            setError("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label id="name" htmlFor="name">name </label>
            <input 
                type="text"
                data-testid="name"
                id="name" 
                name="name" 
                value={name} 
                placeholder="John doe"
                onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
            {error ?  <p role="alert">{error}</p> : <p data-testid="display">{name}</p> }
        </form>
    )
}

export default Login