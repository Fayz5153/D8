import React, { useState,useEffect,useRef } from 'react'
import "./style.css"

const Burger = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
      setMenu(!menu)
    }
    const data = [
        {name:"Lorem ipsum dolor sit."},
        {name:"ipsum dolor sit."},
        {name:"dolor sit."},
        {name:"sit. amet consectetur."},
    ]
    const [value, setValue] = useState("");
    const [search, setSearch] = useState(false);
    const handleSearch = () => {
        
    }
    useEffect(()=>{
        if (value !== "") {
            setSearch(true)
        }
    },[value])
    console.log(search)
    return ( 
        <React.Fragment>
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <div>
                {data.map((item, index)=>{
                    if (search === false) {
                        return(
                            <h1 key={index}>{item.name}</h1>
                        )
                    } else{
                        if (item.name.toUpperCase().includes(value.toUpperCase())) {
                            return(
                                <h1 key={index}>{item.name}</h1>
                            )
                        }
                    }
                })}
            </div>
            {/* <div className='home'>
                <button onClick={handleMenu} className={menu?'btn':"btn btn_close"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div> */}
        </React.Fragment>
     );
}
 
export default Burger;