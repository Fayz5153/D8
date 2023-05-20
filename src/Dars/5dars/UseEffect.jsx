import React, {useEffect, useState} from 'react'
const UseEffect_hook = () => {
    const [count, setCount] = useState(0)
    const [calc, setCacl] = useState(0)

    const calcFunc = ()=>{
        setCount((c)=> c+1)
    }
    // useEffect(function, depandency)
    useEffect(()=>{
        // setTimeout(() => {
        //     setCount((c)=> c+1)
        // }, 1000);
        setCacl(()=> count * 2)
    }, [count])

    return ( 
        <React.Fragment>
            <h1>render boldi {count} martta</h1>
            <button onClick={calcFunc}>count+</button>
            <h1>calc {calc}</h1>
        </React.Fragment>
     );
}
export default UseEffect_hook;