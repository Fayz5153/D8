import React, { useState } from 'react'
import "./Todo.css"
const Todo = () => {
    const [todos, setTodos] = useState([])
    const [ value, setValue ] = useState("")
    const add = () =>{
        setTodos([...todos, value])
        setValue("")
    }
    return ( 
        <div className='TodoContainer'>
            <div className="TodoInput">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={add}>Add Todo</button>
            </div>
            <div className="Todos">
                {todos?.map((item, index)=>{
                    return(
                        <label htmlFor={index} key={index}>
                            <input type="checkbox" id={index}/>
                            {item}
                        </label>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Todo;