import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const addCount = () => setCount(count+1)
    const resetCount = () => setCount(0)
    
    return(
        <div className="app-container">
            <h2>Counter</h2>
            <span>{count}</span>
            <div className="buttons">
                <button className="add" type="button" onClick={addCount}>+</button>
                <button className="reset" type="button" onClick={resetCount}>R</button>
            </div>
        </div>
    )
}

export default Counter