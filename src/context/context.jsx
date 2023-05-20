import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const Mode = (props) => {
    const [theme, setTheme] = useState(true)
    const [name, setName] = useState("Theme change")
    const handleTheme = () =>{
        setTheme(!theme)
    }
    return ( 
        <MyContext.Provider value={{ 
            theme, handleTheme, name, setName
         }}>
            {props.children}
        </MyContext.Provider>
     );
}
 
export default Mode;