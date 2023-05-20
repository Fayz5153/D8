import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [parol, setParol] = useState("")
    const SignIn = () =>{
        if (login === "hello" && parol === "12345") {
            console.log("togri")
            navigate("/items")
        }else{
            alert("parol yoki login xato")
        }
    }
    return ( 
        <React.Fragment>
            <div className="home">
                <div className="form">
                    <input type="text" onChange={(e)=>setLogin(e.target.value)} placeholder='Login'/>
                    <input type="password" onChange={(e)=>setParol(e.target.value)} placeholder='Password'/>
                    <button onClick={SignIn}>Kirish</button>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Home;