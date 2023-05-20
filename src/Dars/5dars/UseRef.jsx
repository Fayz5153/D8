import React, { useRef, useState } from 'react'
const UseRef_hook = () => {
    const Element1 = useRef()
    const Element2 = useRef()
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    
    const FocusInput = () =>{
        // Element1.current.focus()
        // Element2.current.focus()
        if (value1 === "") {
            Element1.current.focus()
        }
        // value2 === "" ?  Element2.current.focus() : null
        value2 === "1234" ? console.log("parol togri") : Element2.current.focus()
    }
    return ( 
        <React.Fragment>
            <input type="text" ref={Element1} onChange={(e)=>setValue1(e.target.value)}/> <br />
            <input type="text" ref={Element2} onChange={(e)=>setValue2(e.target.value)}/> <br />
            <button onClick={FocusInput}>focus</button>
        </React.Fragment>
     );
}
export default UseRef_hook;