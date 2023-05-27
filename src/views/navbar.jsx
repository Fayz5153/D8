import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { MyContext } from '../context/context';
import MyButton from '../components/button';

const Navbar = () => {
    const handleClick =()=>{
        console.log("click")
    }
    const [scroll, setScroll] = useState(0);

    useEffect(()=>{
        const onScroll = () => setScroll(window.pageYOffset);
        
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)

    },[])

    // console.log(scroll)
    return ( 
        <MyContext.Consumer>
           {(x)=>{
            return(
                <div className={scroll > 100 ? "navbar scroled" : "navbar"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/observer"}>Observer</Link>
                    <Link to={"/search"}>Search</Link>
                    {/* <Button className='theme_btn' size='small' type='primary' onClick={x.handleTheme}>{x.name}</Button>
                    <MyButton asd={"w100"} onClick={handleClick}>Salom</MyButton>
                    <MyButton asd={"w300"}>qale</MyButton> */}
                </div>
            )
           }}
        </MyContext.Consumer>
     );
}
 
export default Navbar;