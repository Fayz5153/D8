import React, {useState, useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer';
import { Affix } from 'antd';

const Observer = () => {
    const myRef = useRef()
    const [ElemenVisivle, setElemenVisivle] = useState();
    // console.log("ElemenVisivle", ElemenVisivle)
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setElemenVisivle(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    },[])

    const {ref: myRef2, inView: myElement} = useInView()
    return ( 
        <React.Fragment>
            <div className="box"></div>
            <div className="box">
                <Affix offsetTop={0}><span ref={myRef}>{ElemenVisivle ? "yes":"no"}</span></Affix>
                <h1 className={ElemenVisivle ? "show":"notshow"}>salom</h1>
            </div>
            <div className="box">
                <h1 ref={myRef2} className={myElement ? "show2" :""}>Hello</h1>
            </div>
            <div className="box"></div>
        </React.Fragment>
     );
}
 
export default Observer;