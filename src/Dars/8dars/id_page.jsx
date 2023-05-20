import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Idpage = () => {
    let params = useParams()
    
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/todo"
    const [todos, setTodos] = useState()
    console.log(todos)
    const getTodos = () =>{
        axios.get(url+"/"+params.id)
        .then((res)=>{
            console.log(res.data, "AXIOS")
            setTodos(res.data)
        })
    }
    useEffect(()=>{
        getTodos()
    },[])
    return ( 
        <React.Fragment>
            <h1>Idpage = {params.id} {todos?.city} va {todos?.todo}</h1>
        </React.Fragment>
     );
}
 
export default Idpage;