import { useState } from "react"

function ToDoList() {
    const [tasks,setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")

    const addTask = () => {
        if(inputValue.trim() === "") return;
        const newTask = {
            id: Date.now(),
            text: inputValue
        }
        setTasks([...tasks, newTask])
        setInputValue('')
    }

    const handleChange = (e)=> {
        setInputValue(e.target.value)
    }

    const handleKeyPress=  (e) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    return (
        <div className="app-container">
            <header>
                <h2>To Do List App</h2>
            </header>
            <main>
                <div className="inputfield">
                    <input 
                        type="text" 
                        placeholder="Enter your task..." 
                        value={inputValue} 
                        onChange={handleChange}
                        onKeyDown={handleKeyPress} />
                    <button type="submit" onClick={addTask}>Add</button>
                </div>
                <div className="displaytasks">
                    {tasks.length>0 ? (
                        <ul>
                            {tasks.map((task)=> (
                                <li key={task.id}>
                                    <span>{task.text}</span>
                                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            There is no task yet. Add some tasks
                        </p>
                    ) }
                </div>

            </main>
        </div>
    )
}

export default ToDoList