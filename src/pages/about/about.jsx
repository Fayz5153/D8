import React from 'react'
import Header from "./header/header"
import Main from "./main/main"
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'antd';

const About = () => {
    return ( 
        <React.Fragment>
            <h1>About</h1>
            <div>
                <Link to={""}><Button className='page1' type="primary">page1</Button></Link>
                <Link to={"p2"}><Button type="primary">page2</Button></Link>
                <Link to={"p3"}><Button type="primary">page3</Button></Link>
            </div>
            <Outlet/>
        </React.Fragment>
     );
}
 
export default About;