import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams  } from 'react-router-dom';

const Edit = () => {
    let navigate = useNavigate()
    let params = useParams()

    let url1 = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/blog"

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [description, setDescription] = useState("")

    const putData = () =>{
        const data = {
            title: title,
            url: url,
            description: description,
        }
        axios.put(url1+`/${params.id}`, data)
        .then((res)=>{
            console.log(res)
            if (res.status === 200) {
                navigate("/items")
            }else{
                alert("xatolik")
            }
        })
    }
    return ( 
        <React.Fragment>
            <div className="edit">
                <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder='img url' onChange={(e)=>setUrl(e.target.value)}/>
                <textarea placeholder='description' onChange={(e)=>setDescription(e.target.value)}></textarea>
                <button onClick={putData}>Edit</button>
            </div>
            <button className='back_btn' onClick={()=>navigate("/items")}>
                &laquo;
            </button>
        </React.Fragment>
     );
}
 
export default Edit;