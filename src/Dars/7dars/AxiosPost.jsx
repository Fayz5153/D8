import React, { useState } from 'react'
import "./style.css"

const AxiosPost = () => {
    const [open, setOpen] = useState(false)
    const OpenModal = () =>{
        setOpen(!open)
    }
    return ( 
        <React.Fragment>
            <button onClick={OpenModal}>Modal</button>
            <div className={open === false ? 'modal' : "modal modal_open"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ullam.
            </div>
        </React.Fragment>
     );
}
 
export default AxiosPost;