import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { MyContext } from '../context/context';
import MyButton from '../components/button';

const Navbar = () => {
    const handleClick =()=>{
        console.log("click")
    }
    return ( 
        <MyContext.Consumer>
           {(x)=>{
            return(
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Button className='theme_btn' size='small' type='primary' onClick={x.handleTheme}>{x.name}</Button>
                    <MyButton asd={"w100"} onClick={handleClick}>Salom</MyButton>
                    <MyButton asd={"w300"}>qale</MyButton>
                </div>
            )
           }}
        </MyContext.Consumer>
     );
}
 
export default Navbar;