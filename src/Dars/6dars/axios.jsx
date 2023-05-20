import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => {
    // let url = "https://64536dffc18adbbdfe9cf0dc.mockapi.io/api/v1/todoList"
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/todo"

    const [todos, setTodos] = useState([])

    const getTodos = () =>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data, "AXIOS")
            setTodos(res.data)
        })
    }
    // console.log(todos, "TODOS")

    const [value, setValue] = useState("")
    const postTodos = () =>{
        const data = {
            todo: value
        }
        axios.post(url, data)
        .then((res)=>{
            console.log(res)
            if (res.status === 201) {
                getTodos()
            }
        })
    }
    const [edited, setEdited] = useState("")
    const [id, setId] = useState(null)
    const putTodos = () =>{
        const data = {
            todo: edited
        }
        if (edited !== "") {
             axios.put(url+`/${id}`, data)
            .then((res)=>{
                console.log(res)
                if (res.status === 200) {
                    getTodos()
                }
            })
        } else{
            console.log("input bosh")
        }
    }
    const deleteTodo = (delId)=>{
        axios.delete(url+`/${delId}`)
        .then((res)=>{
            console.log(res)
            if (res.status === 200) {
                getTodos()
            }
        })
    }

    useEffect(()=>{
        getTodos()
        // fetch(url)
        // .then(respons => respons.json())
        // .then(result => console.log(result, "FETCH"))
        // fetch("url/id",{
        //     method:"POST va PUT, DELETE",
        //     headers:{
        //         token: localStorage.getItem("token"),
        //         // "Content-type":"application/json,charset='UTF-8'"
        //     },
        //     // body: JSON.stringify([])
        // }).then(respons => respons.json())
    },[])
    return ( 
        <React.Fragment>
            <div>
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={postTodos}>Post</button>
            </div> <hr />
            <div>
                <input type="text" onChange={(e)=>setId(e.target.value)} placeholder='id'/>
                <input type="text" onChange={(e)=>setEdited(e.target.value)} placeholder='edited text'/>
                <button onClick={putTodos}>Put</button>
            </div>

            <div>
                {todos.map((item, index, array)=>{
                    return(
                        <p key={item.id}>
                            <label htmlFor={item.id}>
                                <input type="checkbox" id={item.id}/>
                                {item.id} // {item.todo} // {item.city}
                            </label>
                            <button onClick={()=>deleteTodo(item.id)}>delete</button>
                        </p>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Axios;