import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Idpage from './id_page';

const Page = () => {
    return ( 
        <React.Fragment>
            <h1>React-router-dom</h1>
            <div>
                <Link to={"/"}>home</Link>
                <Link to={"about"}>About</Link>
                <Link to={"contact"}>Contact</Link>
                <Link to={"sdfsdfsdf"}>404</Link>
                <Link to={"news"}> News</Link>
            </div>
            <Routes>
                <Route index element={ <Home /> }/>
                <Route path='about' element={ <About /> }/>
                <Route path='contact' element={ <Contact /> }/>
                <Route path='news' element={ <h2>News</h2> }/>
                <Route path='news/:id' element={ <Idpage/> }/>
                <Route path='*' element={ <h2>404 not found</h2> }/>
            </Routes>
        </React.Fragment>
     );
}
 
export default Page;